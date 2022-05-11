import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';
import React from 'react'
import './Expenses.css';


const Expenses=(props)=>{
 return (
     <Card className='expenses'>
         {
        props.item.map( 
            expense => (
            <ExpenseItem
            date={expense.date}
            title={expense.title}
            amount={expense.amount}/>
        ))
        }
     </Card>
 )
}

export default Expenses;