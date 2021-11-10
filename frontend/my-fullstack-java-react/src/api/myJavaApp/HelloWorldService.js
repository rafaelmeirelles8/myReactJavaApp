import axios from "axios";
import { Component } from "react";
import { API_URL } from "../../Constants";

class HelloWorldService extends Component {

    executeHelloWorldService() {
        
        return axios.get(`${API_URL}/api/todos/hello-world`)               
    }


    render() {
        return (
            <div></div>
        )
    }
}

export default new HelloWorldService();