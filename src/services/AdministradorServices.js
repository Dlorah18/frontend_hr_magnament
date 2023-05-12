import axios from 'axios'
export async function listUsers(usuario,pass) {
    const response = await axios.get('https://backend-hr-magnament.vercel.app/ListUser')
    return response.data
}