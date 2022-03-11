import { SIGNUP_SUCCESSFUL,SIGNUP_FAIL } from "./reducertype";


const inistalState = {
    user:[{username:'', email:'',password:'', password2:''}],
    usererr :'error'
}

export const signupreducer = (state=inistalState, action) =>{
    switch(action.type){
        case SIGNUP_SUCCESSFUL:
            state = {
           ...state,
           user:action.payload
        }
        break;
        case SIGNUP_FAIL:
            state = {
                ...state,
                usererr:action.payload
            }
    }
}