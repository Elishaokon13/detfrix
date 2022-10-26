import http from '../http-common'
const getAll = () =>{
    return http.get('package')
}

const get = id =>{
    return http.get(`package/${id}`)
}

const create = data =>{
    return http.post("package/",data)
}

const update = (id,data)=>{
    return http.put(`package/${id}`,data)
}

const remove = (id) =>{
    return http.delete(`package/${id}`)
}
const PackageService = {
    getAll, get,create,update,remove
}

export default PackageService;