import {
    CREATE_PACKAGE,
    RETRIEVE_PACKAGE,
    UPDATE_PACKAGE,
    DELETE_PACKAGE
} from './packageType'

import PackageService from '../services/package.service'

export const createPackage = (packagename,duration,profit,investment) => async (dispatch) =>{
    try {
        const res = await PackageService.create({packagename,duration,profit,investment});
        dispatch({
            type:CREATE_PACKAGE,
            payload:res.data
        });
        return Promise.resolve(res.data)
    } catch (error) {
        Promise.reject(error)
    }
}

export const retrievePackage = () => async (dispatch) =>{
    try {
        const res = await PackageService.getAll();
    dispatch({
        type:RETRIEVE_PACKAGE,
        payload:res.data
    });
    return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error)
    }
}

export const updatePackage = (id,data) => async (dispatch) =>{
    try {
        const res = await PackageService.update(id,data);
        dispatch({
            type:UPDATE_PACKAGE,
            payload:data
        })
        return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error)
    }
} 

export const deletePackage = (id) => async (dispatch) =>{
    try {
        await PackageService.remove(id);
        dispatch({
            type:DELETE_PACKAGE,
            payload: {id}
        });
    } catch (error) {
        console.err
    }
}