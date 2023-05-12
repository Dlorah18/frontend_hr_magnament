import axios from 'axios'
export async function loginServices(usuario,pass) {
    
    const request={
        "usuario":usuario,
        "password":pass
    }
    const response = await axios.post('https://backend-hr-magnament.vercel.app/Login', request)
    return response.data
}
export async function userData(idUser){
    const request={
        "idUser":idUser
    }
    const response = await axios.post('https://backend-hr-magnament.vercel.app/UserData', request)
    return response.data
}