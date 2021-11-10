import moment from "moment";
import { Component } from "react";
import TodoService from "../../../api/myJavaApp/TodoService";
import AuthenticationService from "../authentication/AuthenticationService";

class ListTodosComponent extends Component {

    //1 to be called
    constructor(props) {
        super(props)
        

        this.state = {
            todos : 
            [
                //{id: 1, description: "Learning React", done: false, targetDate: new Date()},
                //{id: 2, description: "Learning React1", done: false, targetDate: new Date()},
                //{id: 3, description: "Learning React2", done: false, targetDate: new Date()}
            ] ,
            deletedMessage : null
            
        }
    }

    //called before render. Here we can check if we really need to render again improving the performance
    shouldComponentUpdate = (nextProps, nextState) => {
        console.log("shouldUpdate")
        if(this.state === nextState && this.props === nextProps) {
            return false
        }
        return true
    }

    //called when unmounting the component(like changing the module to another)
    componentWillUnmount = () => {

    }

    //called first time component is called, better call initial method here because state can not be initialized in the constructor
    componentDidMount = () => {
        this.refreshGrid()
    }

    refreshGrid = () => {
        let userName = AuthenticationService.getLoggedInUserName()
        TodoService.retrieveAllTodosByUsername(userName)
        .then(response => {
            this.setState({todos: response.data})
        })
        .catch()
    }

    deleteTodo = (todoId) => {        
        let userName = AuthenticationService.getLoggedInUserName()
        TodoService.deleteTodoById(userName, todoId)
        .then(response => {
                this.setState({
                    deletedMessage : `Todo ${todoId} delete successfully!`
                })
               this.refreshGrid()
        })
        .catch();
    }

    updateTodo = (todoId) => {
        this.props.history.push(`/updateTodo/${todoId}`)
    }

    createTodo = () => {
        this.props.history.push(`/updateTodo/-1`)
    }

    //called when some component changes
    render() {

        console.log("render")
        return (
            <div>
                <h1>List Todo</h1>
                <div className="container">
                    {this.state.deletedMessage && <div className="alert alert-success">{this.state.deletedMessage}</div>}
                    <table className="table">
                        <thead>
                            <tr>                                
                                <th>Description</th>
                                <th>Is completed?</th>
                                <th>Target Date</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.todos.map(todo => {
                                    return <tr key={todo.id}>                                                
                                                <td>{todo.description}</td>
                                                <td>{todo.done.toString()}</td>
                                                <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                                <td><button className="btn btn-success" onClick={() => this.updateTodo(todo.id)}>Update</button></td>
                                                <td><button className="btn btn-warning" onClick={() => this.deleteTodo(todo.id)}>Delete</button></td>
                                            </tr>
                            }) 
                            }
                            
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.createTodo}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListTodosComponent;