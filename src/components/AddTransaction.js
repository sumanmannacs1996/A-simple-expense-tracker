import React,{useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
function AddTransaction() {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0.00);
    const {addTranssaction} = useContext(GlobalContext);
    const submitHandler=(e)=>{
        e.preventDefault();
        addTranssaction({id:Math.random(),desc:text,amount:+amount})
        setAmount(0.00);
        setText('');
    }
    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={submitHandler}>
            <div className='from-control'>
                <label>Description</label>
                <input
                type='text'
                placeholder='Enter Description...'
                value={text}
                onChange={(e)=>setText(e.target.value)}
                />
            </div>
            <div className='from-control'>
                <label>Amount <br/>
                (negative - expense, positive - income)
                </label>
                <input
                type='number'
                placeholder="Enter Amount..."
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                />
            </div>
            <button className="btn" type ='submit'>Add Transaction</button>
            </form> 
        </>
    )
}

export default AddTransaction
