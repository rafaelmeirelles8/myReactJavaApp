import axios from "axios";
import { Component } from "react";

class TodoService extends Component {

    retrieveAllTodosByUsername = (username) => {
        return axios.get(`http://localhost:8080/api/todos/username/${username}/todos`)  
    }

    deleteTodoById = (username, todoId) => {
        return axios.delete(`http://localhost:8080/api/todos/username/${username}/todos/${todoId}`)  
    }

    updateTodoById = (username, todoId, todo) => {
        return axios.put(`http://localhost:8080/api/todos/username/${username}/todos/${todoId}`, todo)  
    }

    retrieveTodoById = (username, todoId) => {
        return axios.get(`http://localhost:8080/api/todos/username/${username}/todos/${todoId}`)  
    }

    createTodo = (username, todo) => {
        return axios.post(`http://localhost:8080/api/todos/username/${username}/todos/`, todo)  
    }
}

export default new TodoService();