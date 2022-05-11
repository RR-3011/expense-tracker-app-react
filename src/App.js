import React,{useState} from 'react'
import NewExpense from './components/NewExpenses/NewExpense';
import Expenses from "./components/Expenses/Expenses";

let DUMMY_EXPENSE=[
   

]



const App=()=>{
  const [expenses,setExpenses]=useState(DUMMY_EXPENSE)

   // fetch('link').then(response=>{
   //    return response.json();
   // })
   // .then(
   //    data=>{
   //       console.log(data);
   //    }
   // )


   const onAddExpenseHandler=(expense)=>{
       const updatedExpense=[expense,...expenses]
    setExpenses(updatedExpense)
   }
    return (
       <div>
           <NewExpense onAddExpense={onAddExpenseHandler}/>
          <Expenses item={expenses}/>
       </div>
    )
}

export default App;