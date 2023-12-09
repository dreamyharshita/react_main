import React,{useState} from 'react';

import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';


const ExpenseItem= (props) => {
  const[title,setTitle]= useState(props.title);
  const[amount,setExpense]= useState(props.amount);
    return (       
        <Card className="expense-item" >
       <ExpenseDate date={props.date}/>
        <ExpenseDetails title={title} location={props.location} amount={amount}/>
                
<button onClick={()=>{
  setTitle('Updated!');
  console.log(title);
}
}>Change Title</button>
<button onClick={()=>{
  setExpense('100');
  console.log(amount);
}
}>Change Expense</button>
        
<button onClick={(e)=>{
  alert("deleting");
{ 
  let item = e.target.parentElement;
  item.remove() }
}
}>DELETE</button>
        </Card>
        
      );
}

export default ExpenseItem;