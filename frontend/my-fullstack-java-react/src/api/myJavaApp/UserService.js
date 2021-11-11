import axios from "axios";
import { Component } from "react/cjs/react.production.min";
import { API_URL } from "../../Constants";

class UserService extends Component {

    retrieveAllUsers = () => {
        return axios.get(`${API_URL}/api/users/jpa/users`)
    }
}

export default new UserService();