import http from '../http-common'

const getAll = () =>{
    return http.get('deposit');
}
const get = id =>{
    return http.get(`deposit/${id}`)
}

const create = data =>{
    return http.post("deposit",data)
}

const update = (id,data) =>{
    return http.put(`deposit/${id}`,data)
}

const DepositService = {
    getAll, get,create, update
}

export default DepositService;