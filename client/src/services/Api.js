import axios from 'axios'

const Api = axios.create({
  baseURL: "http://localhost:8081/api/",
})
export default {
  Api  
}
