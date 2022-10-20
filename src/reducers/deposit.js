import {
    CREATE_DEPOSIT,
    RETRIEVE_DEPOSIT,
    UPDATE_DEPOSIT,
} from '../action/depositType'

const initialDeposit = [];

function Deposit (deposits = initialDeposit, action){
    const {type, payload} = action;
    switch (type) {
        case CREATE_DEPOSIT:
            return [...deposits, payload];
        case RETRIEVE_DEPOSIT:
            return payload;
        case UPDATE_DEPOSIT:
            return deposits.map((deposit)=>{
                if(deposit.id === payload.id){
                    return {
                        ...deposit,
                        ...payload
                    }
                    
                }else{
                    return deposit;
                }
            })
    
        default:
            return deposits;
    }
}

export default Deposit;