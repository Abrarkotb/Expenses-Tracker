import React,{createContext ,useReducer} from 'react'
import AppReducer from './AppReducer'
const initiaState = {
    transaction:[
        { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
         ] 
}
export const GlobalContext = createContext(initiaState);
export const GlobalProvider =({children})=>{
   const [state , dispatch] = useReducer(AppReducer,initiaState);
   function deletetransaction(id){
    dispatch({
        type: 'Delet_transactions',
        payload: id
    })
   }
   return (<GlobalContext.provider value={{
    transaction: state.transaction,
    deletetransaction
   }}>
    {children}
    </GlobalContext.provider>)
}
