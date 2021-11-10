import React, {Component} from "react";
import "./myReactApplication.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthenticatedRoute from "./authentication/AuthenticatedRoute";
import LoginComponent from "./login/LoginComponent";
import ListTodosComponent from "./listTodosComponent/ListTodosComponent";
import HeaderComponent from "./headerComponent/HeaderComponent";
import FooterComponent from "./footerComponent/FooterComponent";
import LogoutComponent from "./login/LogoutComponent";
import WelcomeComponent from "./welcomeComponent/WelcomeComponent";
import ErrorComponent from "./errorComponent/ErrorComponent";
import TodoComponent from "./listTodosComponent/TodoComponent";

class MyApp extends Component {

    render() {
        return (
            <div>
                <Router> 
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact component={LoginComponent}></Route>
                        <Route path="/login" component={LoginComponent}></Route>
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}></AuthenticatedRoute>
                        <AuthenticatedRoute path="/todos/" component={ListTodosComponent}></AuthenticatedRoute>
                        <AuthenticatedRoute path="/logout" component={LogoutComponent}></AuthenticatedRoute>
                        <AuthenticatedRoute path="/updateTodo/:id" component={TodoComponent}></AuthenticatedRoute>
                        <Route component={ErrorComponent}></Route>
                    </Switch>
                    <FooterComponent />
                </Router>
                {/*<LoginComponent/>
                <WelcomeComponent/>*/}
            </div>
        )
    }
}

export default MyApp;