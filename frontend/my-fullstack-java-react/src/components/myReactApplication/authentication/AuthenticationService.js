import axios from "axios"
import { API_URL } from "../../../Constants"

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService{
    registerSuccessfulLogin = (username, password) => {
        let basicAuthHeader = this.createBasicAuthToken(username, password)
        
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        this.setupAxiosInterceptors(basicAuthHeader)
    }

    registerSuccessfulLoginForJwt = (username, token) => {
        let basicAuthHeader = this.createJwtToken(token)
        
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        this.setupAxiosInterceptors(basicAuthHeader)
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if(user=== null) {
            return false
        }
        return true
    }

    createJwtToken(token) {
        return 'Bearer ' + token
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ':' + password)
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if(user === null) {
            return ""
        }
        return user
    }

    //Using Jwt Auth
    login = (username, password) => {
        return axios.post(`${API_URL}/authenticate`, {            
            username: username,
            password: password            
        })  
    }

    //Using Basic Auth
    /*login = (username, password) => {
        let basicAuthHeader = this.createBasicAuthToken(username, password)

        return axios.get(`http://localhost:8080/basicauth`, {
            headers: {
                authorization: basicAuthHeader
            }
        })  
    }*/

    setupAxiosInterceptors(header) {
       
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.authorization = header
                }
                return config                    
            }
        )
    }
}

export default new AuthenticationService();