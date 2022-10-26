import {
    CREATE_PACKAGE,
    RETRIEVE_PACKAGE,
    UPDATE_PACKAGE,
    DELETE_PACKAGE
} from '../action/packageType'

const initialPackage = [];
function Packages (packages = initialPackage, action){
    const {type,payload} = action;
    switch (type) {
        case CREATE_PACKAGE:
            return [...packages, payload];
        case RETRIEVE_PACKAGE:
            return payload;
        case UPDATE_PACKAGE:
            return packages.map((pack)=>{
                if(pack.id === payload.id){
                    return {
                        ...pack,
                        ...payload
                    }
                }else{
                    return pack;
                }
            });
        case DELETE_PACKAGE:
            return packages.filter(({id})=>id !== payload.id);
        default:
            return packages;
    }
}


export default Packages;