import axios from "axios"

class AuthenticationService{
    registerSuccessfulLogin = (username, password) => {
        let basicAuthHeader = this.createBasicAuthToken(username, password)
        
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors(basicAuthHeader)
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user=== null) {
            return false
        }
        return true
    }

    createBasicAuthToken(username, password) {
        return 'Basic ' + window.btoa(username + ':' + password)
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser')
        if(user === null) {
            return ""
        }
        return user
    }

    login = (username, password) => {
        let basicAuthHeader = this.createBasicAuthToken(username, password)

        return axios.get(`http://localhost:8080/basicauth`, {
            headers: {
                authorization: basicAuthHeader
            }
        })  
    }

    setupAxiosInterceptors(basicAuthHeader) {
       
        axios.interceptors.request.use(
            (config) => {
                if(this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config                    
            }
        )
    }
}

export default new AuthenticationService();