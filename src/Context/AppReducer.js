export default (state , action) =>{
    switch(action.type){
        case 'Delete_transaction':
            return{
                ...state,
                transactions: state.transactions.filter(transaction=> transaction.id !==
                    action.payload)
            }
            case'Add_TRANSACTION':
            return{
                ...state,
                transactions:[action.payload,...state.transactions]
            }
        default:
            return state;
    }
}