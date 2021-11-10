import axios from "axios";
import { Component } from "react";

class HelloWorldService extends Component {

    executeHelloWorldService() {
        
        return axios.get("http://localhost:8080/api/todos/hello-world")               
    }


    render() {
        return (
            <div></div>
        )
    }
}

export default new HelloWorldService();