import { ErrorMessage, Field, Form, Formik } from "formik";
import { Component } from "react";
import UserService from "../../../api/myJavaApp/UserService";

class UserComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id : this.props.match.params.id,
            password : '',
            username: '',
            name: '',
            age: ''
        }
    }

    validate = (values) => {
        let errors = {}

        if(values.username === '')
            errors.username = "Username is required"
        else if(values.name === '')
            errors.name = "Name is required"        
        else if(values.age < 0)
            errors.age = "Age must be bigger than 0!"

        return errors
    }


    componentDidMount = () => {               
        if(this.state.id === '-1')
            return
        
        UserService.retrieveUserById(this.state.id)
        .then(response => {                        
            this.setState( 
                {
                    id: response.data.id,
                    password: response.data.password,
                    username: response.data.username,
                    name: response.data.name,
                    age: response.data.age
                })    
        })
        .catch()
    }

    onSubmit = (values) => {        
        
        let user = {
            id: this.state.id,
            password: this.state.password,
            username: values.username,
            name: values.name,
            age: values.age
        }

        if(this.state.id === -1) {
            UserService.createUser(user)
            .then(response => this.props.history.push(`/users/`))
            .catch()
        }
        else {            
            UserService.updateUser(user)
            .then(response => this.props.history.push(`/users/`))
            .catch()
        }        
    }

    render() {
        let {username, name, age } = this.state

        return (
            <>
                <h1>User</h1>
                <div className="container">
                <Formik initialValues={{username, name, age}}
                    onSubmit={this.onSubmit}
                    validateOnChange={false} //just validate when submitting
                    validateOnBlur={false}   //just validate when submitting
                    validate={this.validate}
                    enableReinitialize={true}>
                    {
                        (props) => (                                
                            <Form>
                                <ErrorMessage name="username" className="alert alert-warning" component="div" />
                                <ErrorMessage name="name" className="alert alert-warning" component="div" />
                                <ErrorMessage name="age" className="alert alert-warning" component="div" />
                                <fieldset className="form-group">
                                    <label>Username</label>
                                    <Field className="form-control" type ="text" name="username"></Field>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Name</label>
                                    <Field className="form-control" type ="text" name="name"></Field>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Age</label>
                                    <Field className="form-control" type="text" name="age"></Field>
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

export default UserComponent;