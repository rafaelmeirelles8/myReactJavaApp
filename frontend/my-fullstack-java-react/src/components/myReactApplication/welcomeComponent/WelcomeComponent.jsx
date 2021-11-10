import { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../../../api/myJavaApp/HelloWorldService";

class WelcomeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            helloMessage: ""
        }
    }

    retrieveWelcomeMessage = () => {
        HelloWorldService.executeHelloWorldService()
        .then(response => {
            this.setState({helloMessage: response.data})            
        })
        .catch()
    }

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}. 
                    You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click here to get a welcome message!
                    <button className="btn btn" 
                        onClick={this.retrieveWelcomeMessage}>Hello world <br /> from Service
                    </button>
                </div>
                <div className="container">
                    {this.state.helloMessage}
                </div>
            </>
        )
    }
}

export default WelcomeComponent