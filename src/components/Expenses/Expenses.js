
import React,{useState} from 'react';
import ExpenseItem from "./ExpenseItem";

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
const Expenses= (props)=>{
    const [filteredyear,setFilteredYear]=useState('2023');
    
    const filterHandler= selectedYear =>{
       
        setFilteredYear(selectedYear);

        
        };
        const result=props.item.filter(exp=>{
            return exp.date.getFullYear().toString()===filteredyear;
             });
           let contentmorethan1="";
             let defaultcontent= <p>No data found</p>;
                if(result.length>0){
                    
                defaultcontent=result.map(

                    expense=>(
                        <ExpenseItem 
                        key={expense.id}
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date} 
                        ></ExpenseItem>
                    )
                );
                    }
                    if(result.length===1){
                         contentmorethan1=<p>Only single Expense here. Please add more..."</p>;
                    }
               
    return (
        <Card classname="expenses">
            <ExpensesFilter selected={filteredyear}  onChangeFilter={filterHandler}></ExpensesFilter>
           {defaultcontent}
                {contentmorethan1}
            
        </Card>
    )

}
export default Expenses;
 /*{result.length===0 && <p>No data found</p>}
            {result.length>0 && result.map(

                    expense=>(
                        <ExpenseItem 
                        key={expense.id}
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date} 
                        ></ExpenseItem>
                    )
                ) }
          */