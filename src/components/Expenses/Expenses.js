
import React,{useState} from 'react';
import ExpenseItem from "./ExpenseItem";

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
const Expenses= (props)=>{
    const [filteredyear,setFilteredYear]=useState('2020');
    const filterHandler= selectedYear =>{
        setFilteredYear(selectedYear);
    }
    return (
        <Card classname="expenses">
            <ExpensesFilter selected={filteredyear}  onChangeFilter={filterHandler}></ExpensesFilter>
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