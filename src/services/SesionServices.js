import axios from 'axios'
export async function loginServices(usuario,pass) {
    
    const request={
        "usuario":usuario,
        "password":pass
    }
    console.log("request "+request)
    const response = await axios.post('http://localhost:3005/Login', request)
    return response.data
}