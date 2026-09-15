import axios from 'axios'
//Aqui estamos dizendo que o nosso front vai acessa esse back
const api = axios.create({
baseURL:'http://localhost:3000'
})

export default api