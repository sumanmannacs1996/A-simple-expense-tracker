export default (state,action)=>{
    const {type,payload} = action;
    switch(type){
        case "DELTE_TRANSACTION" :
            return{
                ...state,
                transactions: state.transactions.filter(p=>p.id !== payload)
            }
        case "ADD_TRANSACTION" :
            return{
                ...state,
                transactions: [payload,...state.transactions]
            }    

        default: return state;
    }
}