import React, { Component } from "react";
import AuthenticationService from "../authentication/AuthenticationService";

class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: "",
            password: "",
            hasLoginFailed: false,
            hasLoginSuccess: false
        }
    }

    handleFieldChange = (event) => {  
        const name = event.target.name;  
        this.setState(
            {
                [name]:event.target.value
            }
        );    
    }

    //history has many properties to navigate through pages
    //Using Jwt
    loginClicked = () => {
        AuthenticationService.login(this.state.userName, this.state.password)
        .then( response => 
            {                
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.userName,response.data.token)
                this.props.history.push(`/welcome/${this.state.userName}`)
            }
        )
        .catch(() => 
            {
                this.setState( {
                    hasLoginFailed: true
                })
            }
        )      
    }
   
    //history has many properties to navigate through pages
    //Using Basic Auth
    /*loginClicked = () => {
        AuthenticationService.login(this.state.userName, this.state.password)
        .then( () => 
            {
                AuthenticationService.registerSuccessfulLogin(this.state.userName,this.state.password)
                this.props.history.push(`/welcome/${this.state.userName}`)
            }
        )
        .catch(() => 
            {
                this.setState( {
                    hasLoginFailed: true
                })
            }
        )      
    }*/

    render() {
        return (
            <div>     
                <h1>Login</h1>
                <div className="container">          
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.hasLoginSuccess && <div>Login Successful</div>}
                    User Name: <input type="text" name="userName" value={this.state.userName} onChange={this.handleFieldChange}></input>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleFieldChange}></input>
                    <button className="btn btn" onClick={this.loginClicked}>Login</button>                    
                    {/*{<div hidden={!this.state.hasLoginFailed}>Invalid Credentials</div>
                    <div hidden={!this.state.hasLoginSuccess}>Login Successful</div>*/}
                </div> 
            </div>
        )
    }
}

export default LoginComponent;