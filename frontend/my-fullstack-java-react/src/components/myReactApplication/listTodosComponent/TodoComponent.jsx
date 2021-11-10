import { ErrorMessage, Field, Form, Formik } from "formik";
import moment from "moment";
import { Component } from "react";
import TodoService from "../../../api/myJavaApp/TodoService";
import AuthenticationService from "../authentication/AuthenticationService";

class TodoComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id : this.props.match.params.id,
            description: '',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }
    }

    componentDidMount = () => {       
        console.log(this.state.id)
        if(this.state.id === '-1')
            return

        let userName = AuthenticationService.getLoggedInUserName()
        TodoService.retrieveTodoById(userName, this.state.id)
        .then(response => {            
            this.setState( 
                {
                    id: response.data.id,
                    description: response.data.description,
                    targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
                })    
        })
        .catch()
    }


    onSubmit = (values) => {
        let userName = AuthenticationService.getLoggedInUserName()

        
        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: moment(values.targetDate)
        }

        if(this.state.id === -1) {
            TodoService.createTodo(userName, todo)
            .then(response => this.props.history.push(`/todos/`))
            .catch()
        }
        else {            
            TodoService.updateTodoById(userName, this.state.id, todo)
            .then(response => this.props.history.push(`/todos/`))
            .catch()
        }        
    }

    //validate form, then call onSubmit if OK!
    validate = (values) => {
        let errors = {}

        if(!values.description) {
            errors.description = "Description is required"
        }            
        else if(values.description.length < 5) {
            errors.description = "Description must be bigger than 5 chars"
        }

        if(!moment(values.targetDate).isValid()) {
            errors.targetDate = "Target Date is required"
        }
                
        return errors
    }

    render() {
        let {description, targetDate } = this.state
        
        return (
            <>
                <h1>Todo</h1>
                <div className="container">
                    <Formik initialValues={{description, targetDate}}
                    onSubmit={this.onSubmit}
                    validateOnChange={false} //just validate when submitting
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}>
                    {
                        (props) => (                                
                            <Form>
                                <ErrorMessage name="description" className="alert alert-warning" component="div" />
                                <ErrorMessage name="targetDate" className="alert alert-warning" component="div" />
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type ="text" name="description"></Field>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field className="form-control" type="date" name="targetDate"></Field>
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>                                
                        )
                    }                        
                    </Formik>
                </div>
            </>
        )
    }
}

export default TodoComponent;