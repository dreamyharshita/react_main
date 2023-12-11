import  React,{ useState } from 'react';
import ExpenseItem from './ExpenseItem';
import expenses from './Expenses';

let title,amount,date,location;
const ExpenseForm= () =>{
    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState('');
    const [date,setDate]=useState('');
    const [location,setLocation]=useState('');
    const TitleHandler=(e)=>{
        setTitle(e.target.value); 
       console.log(title);
    }
    const DateHandler=(e)=>{
        setDate(e.target.value);
        console.log(date);
     }
     const AmountHandler=(e)=>{
        setAmount(e.target.value);
        console.log(amount);
     }
     const LocationHandler=(e)=>{
        setLocation(e.target.value);
        console.log(location);
     }
    
  const AddExpense= () => {
    console.log("Expense added");
  }
    return(<div>
        <form>
        <label>Expense Title</label>
        <input type="Text" onChange={TitleHandler}></input>
        <label>Expense Location</label>
        <input type="Text" onChange={LocationHandler}></input>
        <label>Expense Amount</label>
        <input type="Number" min="0.01" step="0.01" onChange={AmountHandler}></input>
        <label>Date</label>
        <input type="date" onChange={DateHandler} ></input>
        <button onClick={AddExpense}>Add Expense</button>
        </form>
    </div>

    );
}


export default ExpenseForm ;
