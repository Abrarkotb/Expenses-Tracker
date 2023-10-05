export default (state , action) =>{
    switch(action.type){
        case 'Delete_transaction':
            return{
                ...state,
                transactions: state.transactions.filter(transaction=> transaction.id !==
                    action.payload)
            }
        default:
            return state;
    }
}