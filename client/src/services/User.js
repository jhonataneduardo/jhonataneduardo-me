import axios from 'axios'

const http = axios.create({
  baseURL: "http://localhost:8081/api/",
})

export default {
  login:(user, pass) => {
    return http.get('user/login', {
      auth: {
        username: user,
        password: pass
      }
    })
  }
}
