import React,{useState} from "react";
 import ExpenseForm from'./ExpenseForm';
  const NewExpense=(props)=>{
  const[isediting,setisEditing] = useState(false);
   const onSaveExpenseDataHandler=(enteredExpenseData)=>{
    const ExpenseData= {
        ...enteredExpenseData,
        id:Math.random().toString()
    };
  props.onAddExpense(ExpenseData);
  setisEditing(false);
   }
const startEditingHandler=()=>{
  setisEditing(true);
}
const stopediting =()=>{
  setisEditing(false);
}
    return (
        <div>
        {!isediting && <button onClick={startEditingHandler}>Add Expense</button>}  
         {isediting && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopediting}/>} 

          
            
            </div>
    );
  }

  export default NewExpense;