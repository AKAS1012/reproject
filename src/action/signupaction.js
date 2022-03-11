import { SIGNUP_SUCCESSFUL, SIGNUP_FAIL } from "../reducer/reducertype";
import axios from 'axios'

export const signuperr = async (dispatch) =>{
    await dispatch({
        type:SIGNUP_FAIL,
        payload:''
    })
}

export const signupaction =  async (dispatch) =>{
   const user = [{username:'', email:'', password:'', password2:''}]

   await axios.post('', user)
   .then((res)=>{
       Console.log(res.data)
       dispatch({
           type:SIGNUP_SUCCESSFUL,
           payload:res.data
       })
   })
   .catch((err)=>{
       console.log('err', err)
       dispatch({
           type:SIGNUP_FAIL,
           payload:err
       })
   })
}

export const logout = () =>{
    return dispatch=>{
        sessionStorage.clear();
        const  user=[{username:'', email:'', password:'', password2:''}]
       dispatch({
           type:SIGNUP_SUCCESSFUL,
           payload:user
       })
       dispatch({
           type:SIGNUP_FAIL,
           payload:''
       })
    }
}