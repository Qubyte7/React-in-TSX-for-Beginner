import { configureStore,createSlice  } from '@reduxjs/toolkit'

const initialState = {value:{username:""}}
const userSlice = createSlice({
    name :"user", //this is like the name of our state
    initialState,
    reducers:{
        login:(state, action) =>{
            state.value = action.payload //action.payload represent the value that we recieve from input
        //here we are setting the value of the state to what we got from the input box
        },
        logout :(state)=>{
            state =  initialState
        }
    }
})

export const {login , logout} = userSlice.actions;//.actions => means that we are getting the functions from the userSlice

export const Store = configureStore({
    reducer:{
        user : userSlice.reducer
    }
})






