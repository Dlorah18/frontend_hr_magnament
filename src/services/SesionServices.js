import axios from 'axios'
export async function loginServices(usuario,pass) {
    
    const request={
        "usuario":usuario,
        "password":pass
    }
    const response = await axios.post('http://localhost:3005/Login', request)
    return response.data
}
export async function userData(idUser){
    const request={
        "idUser":idUser
    }
    const response = await axios.post('http://localhost:3005/UserData', request)
    return response.data
}