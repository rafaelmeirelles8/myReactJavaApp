import { Component } from "react"
import UserService from "../../../api/myJavaApp/UserService"

class ListUsersComponent extends Component {


    constructor(props) {
        super(props)

        this.state = {
            users: [

            ],
            deletedMessage : null
        }
    }


    componentDidMount = () => {
        this.refreshGrid()
    }

    refreshGrid = () => {
        UserService.retrieveAllUsers()
        .then(response => {            
            this.setState( {users: response.data })
        })
        .catch()
    }

    createUser = () => {
        this.props.history.push(`/updateUser/${-1}`)
    }

    updateUser = (id) => {
        this.props.history.push(`/updateUser/${id}`)
    }

    deleteUser = (id) => {
        UserService.deleteUserById(id)
        .then(response => {
            this.refreshGrid()
        })
        .catch()
    }

    render()
    {
        return (
            <>
                <h1>Users</h1>
                <div className="container">
                {this.state.deletedMessage && <div className="alert alert-success">{this.state.deletedMessage}</div>}
                    <table className="table">                        
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Age</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map( users => {
                                    return (
                                        <tr key={users.id}>
                                            <td>{users.name}</td>
                                            <td>{users.username}</td>
                                            <td>{users.age}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateUser(users.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteUser(users.id)}>Delete</button></td>
                                        </tr>   
                                    )     
                                })
                            }
                        </tbody>
                    </table>
                    <div>
                        <button className="btn btn-success" onClick={this.createUser}>Add</button>
                    </div>
                </div>
            </>
        )
    }
}

export default ListUsersComponent