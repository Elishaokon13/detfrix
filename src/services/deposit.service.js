import axios from "axios";
import { baseURL } from "../config";


const createDeposit = async (bankname, accountname,accountnumber ) => {
 const res = await axios.post(baseURL + "BankCreate",{
    bankname, accountname,accountnumber
 });
 return res;
}