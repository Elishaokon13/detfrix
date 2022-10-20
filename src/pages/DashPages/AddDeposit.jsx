import React, { useState } from 'react'
import { createDeposit } from '../../action/deposit';
import DepositService from '../../services/deposit.service';
const AddDeposit = () => {
    const intialDepositState = {
        amount:"",
        paymentMethod:"",
        upload:""
    };
    const [deposit, setDeposit] = useState(intialDepositState)
    const handleInputChange = event => {
        const { name, value } = event.target;
        setDeposit({ ...deposit, [name]: value });
      };

      const saveDeposit = () => {
        var data = {
            amount: deposit.amount,
            paymentMethod: deposit.paymentMethod,
            upload: deposit.upload
        };
    
        createDeposit(data)
          .then(response => {
            setDeposit({
             
                amount: response.data.title,
                paymentMethod: response.data.description,
                upload: response.data.published
            });
           console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });

         const newDeposit = () =>{
            setDeposit(intialDepositState);
          }
      };
    return (
    <div>

    </div>
    )
}

export default AddDeposit