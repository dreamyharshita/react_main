
import React,{useState} from 'react';
import ExpenseItem from "./ExpenseItem";

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
const Expenses= (props)=>{
    const [filteredyear,setFilteredYear]=useState('2020');
    
    const filterHandler= selectedYear =>{
       
        setFilteredYear(selectedYear);

        
        };
        const result=props.item.filter(exp=>{
            return exp.date.getFullYear().toString()===filteredyear;
             });
           
    return (
        <Card classname="expenses">
            <ExpensesFilter selected={filteredyear}  onChangeFilter={filterHandler}></ExpensesFilter>

            {
                result.map(

                    expense=>(
                        <ExpenseItem 
                        key={expense.id}
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