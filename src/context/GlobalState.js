import {createContext,useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState ={
    transactions:[
        {id:1,desc:"Book", amount:-5},
        {id:2,desc:"Laptop", amount:-1000},
        {id:3,desc:"Salary", amount:+5000},
        {id:4,desc:"Camera", amount:-500}
    ]
}
//create conatext
export const GlobalContext = createContext(initialState);

//Provide components

export const GlobalProvider =({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState);

    //Actions
    const deleteTransaction =(id)=>{
        console.log(id);
        dispatch({
            type:"DELTE_TRANSACTION",
            payload:id
        })
    }

    const addTranssaction=(transaction)=>{
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        })
    }

    return(<GlobalContext.Provider value={
        {
            transactions: state.transactions,
            deleteTransaction,
            addTranssaction
        }
    }>
        {children}
    </GlobalContext.Provider>)
}
