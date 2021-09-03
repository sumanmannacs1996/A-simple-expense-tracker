import React,{useContext} from 'react'

import {GlobalContext} from '../context/GlobalState'

function Transaction({transaction}) {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+'
    return (
        <li className={sign === '-' ? 'minus' : 'plus'}>
            {transaction.desc}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn"
            onClick={()=>deleteTransaction(transaction.id)}
            >X</button>
        </li>
    )
}

export default Transaction
