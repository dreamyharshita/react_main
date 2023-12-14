import React from "react";
 import ExpenseForm from'./ExpenseForm';
  const NewExpense=(props)=>{

   const onSaveExpenseDataHandler=(enteredExpenseData)=>{
    const ExpenseData= {
        ...enteredExpenseData,
        id:Math.random().toString()
    };
  props.onAddExpense(ExpenseData);
   }

    return (
        <div>
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
            </div>
    );
  }

  export default NewExpense;