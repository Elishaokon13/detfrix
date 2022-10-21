import {
    CREATE_DEPOSIT,
    RETRIEVE_DEPOSIT,
    UPDATE_DEPOSIT
} from './depositType'
import DepositService from '../services/deposit.service';

export const createDeposit = (userid,amount,paymentMethod,upload) => async(dispatch) =>{
    try {
        const res = await DepositService.create({userid,amount,paymentMethod,upload});
        dispatch({
            type:CREATE_DEPOSIT,
            payload:res.data
        });
        return Promise.resolve(res.data)
    } catch (error) {
        Promise.reject(error)
    }
    
}


export const retrieveDeposit = () => async (dispatch) =>{
   try {
    const res = await DepositService.getAll();
    dispatch({
        type:RETRIEVE_DEPOSIT,
        payload:res.data
    });
   } catch (error) {
     console.log(error)
   }


}


export const updateDeposit = (id,data) => async (dispatch) =>{
    try {
        const res = await DepositService.update(id,data);
        dispatch({
            type:UPDATE_DEPOSIT,
            payload:data
        });
        return Promise.resolve(res.data)
    } catch (error) {
        return Promise.reject(error);
    }
}