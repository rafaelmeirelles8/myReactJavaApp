import axios from "axios";
import { Component } from "react";
import { API_URL } from "../../Constants";

class TodoService extends Component {

    retrieveAllTodosByUsername = (username) => {
        return axios.get(`${API_URL}/api/todos/username/${username}/todos`)  
    }

    deleteTodoById = (username, todoId) => {
        return axios.delete(`${API_URL}/api/todos/username/${username}/todos/${todoId}`)  
    }

    updateTodoById = (username, todoId, todo) => {
        return axios.put(`${API_URL}/api/todos/username/${username}/todos/${todoId}`, todo)  
    }

    retrieveTodoById = (username, todoId) => {
        return axios.get(`${API_URL}/api/todos/username/${username}/todos/${todoId}`)  
    }

    createTodo = (username, todo) => {
        return axios.post(`${API_URL}/api/todos/username/${username}/todos/`, todo)  
    }
}

export default new TodoService();