import axios from "axios";
import { Component } from "react/cjs/react.production.min";
import { API_URL } from "../../Constants";

class UserService extends Component {

    retrieveAllUsers = () => {
        return axios.get(`${API_URL}/api/users/jpa/users`)
    }

    retrieveUserById = (id) => {
        return axios.get(`${API_URL}/api/users/jpa/users/${id}`)
    }

    deleteUserById = (id) => {
        return axios.delete(`${API_URL}/api/users/jpa/users/${id}`)
    }

    createUser = (user) => {
        return axios.post(`${API_URL}/api/users/jpa/users`, user)
    }

    updateUser = (user) => {
        return axios.put(`${API_URL}/api/users/jpa/users/${user.id}`, user)
    }
}

export default new UserService();