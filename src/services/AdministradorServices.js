import axios from 'axios'
export async function listUsers(rolFilter, userFilter, stateFilter) {
  const request = {
    "user": userFilter,
    "estado": stateFilter,
    "idRol": rolFilter,
  }
  console.log(request)
  const response = await axios.post('http://localhost:3005/ListUser', request)
  return response.data
}
export async function previewUser(idUser) {
  const response = await axios.get(`http://localhost:3005/PreviewUser/${idUser}`)
  return response.data
}
export async function createUser(reNames, reLastname, rePass, reIdRol, reEmail) {
  const request = {
    "names": reNames,
    "lastname": reLastname,
    "pass": rePass,
    "idRol": reIdRol,
    "email": reEmail
  }
  const response = await axios.post(`http://localhost:3005/CreateUser`, request)
  return response.data
}

export async function activeUser(userId, razon, stateUser) {
  const request = {
    "user": userId,
    "razon": razon,
    "stateUser": stateUser,
  }
  console.log(request)
  const response = await axios.post('http://localhost:3005/ActiveUser', request)
  return response.data
}

export async function editUser(namesUser, lastnamesUser, rolUser,idUser) {
  const request = {
    "idUser":idUser,
    "names": namesUser,
    "lastname": lastnamesUser,
    "idRol": rolUser,
  }

  const response = await axios.put('http://localhost:3005/EditUser', request)
  return response.data
}