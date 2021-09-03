import React,{useContext} from 'react'
import {GlobalContext, GlobalProvider} from '../context/GlobalState';

function Balance() {
    const {transactions} = useContext(GlobalContext);
    const sum = transactions.reduce((a,p)=>p.amount + a,0).toFixed(2);
    return (
        <>
            <h4>Your Balance</h4>
            <h1 id="balance">${sum}</h1>
        </>
    )
}

export default Balance
