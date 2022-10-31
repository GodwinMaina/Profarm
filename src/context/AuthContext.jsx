//context to manage state by keeping track of user whenever logged  in or not.
//state being global.


import {createContext, useReducer} from 'react'

export const AuthContext = createContext();

export const authReducer =(state,action)=>{
    switch(action.type){
        case'LOGIN':
        //payload 
        return {user: action.payload}

        case'LOGOUT':
        return{user:null}
        default:
            return state
    }
}

 const AuthContextprovider = ({children})=>{

    //register state:
    const [state, dispatch]=useReducer(authReducer,{user:null})

    console.log('AuthContext state:',state)

    return(

      <AuthContext.Provider value={{...state,dispatch}}>
        {children}
      </AuthContext.Provider>  
    )
};

export default AuthContextprovider;