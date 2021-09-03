import React,{useContext} from 'react'
import {GlobalContext, GlobalProvider} from '../context/GlobalState';

function IncomeExpense() {
    const {transactions} = useContext(GlobalContext);
    const income = transactions.filter(p=>p.amount > 0).reduce((a,p)=>p.amount +a,0)
    const expense = transactions.filter(p=>p.amount < 0).reduce((a,p)=>p.amount + a,0);
    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${expense}</p>
            </div>
            
        </div>
    )
}

export default IncomeExpense
