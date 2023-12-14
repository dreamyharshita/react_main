

import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

const Expenses= (props)=>{
    return (
        <Card classname="expenses">
            {
                props.item.map(
                    expense=>(
                        <ExpenseItem 
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date} 
                        ></ExpenseItem>
                    )
                )}
                
            
        </Card>
    )
}
export default Expenses;