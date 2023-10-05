import React , {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import  Transactions from './Transactions';
 export const TransactionList = () => {
 const {transaction} = useContext(GlobalContext);
 
  return (
    <>
       <h3>History</h3>
      <ul id="list" className="list">
        {transaction.map(transaction =>(<Transactions transaction={transaction}/>))}
      </ul>
    </>
  )
}

export default TransactionList
