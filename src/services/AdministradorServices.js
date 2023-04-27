import axios from 'axios'
export async function listUsers(usuario,pass) {
    const response = await axios.get('http://localhost:3005/ListUser')
    return response.data
}