import  React,{ useState } from 'react';
import ExpenseItem from './ExpenseItem';
import expenses from './Expenses';

let title,amount,date,location;
const ExpenseForm= () =>{
   // const [title,setTitle]=useState('');
   // const [amount,setAmount]=useState('');
   // const [date,setDate]=useState('');
   // const [location,setLocation]=useState('');
   const [userInput,setUserInput]=useState({
      title:'',
      date:'',
      location:'',
      amount:''
   })
    const TitleHandler=(e)=>{
        setUserInput((prevState)=> {
        return  {...prevState,title: e.target.value};
      }); 
      
    }
    const DateHandler=(e)=>{
      setUserInput((prevState)=> {
         return  {...prevState,date: e.target.value};
       }); 
     }
     const AmountHandler=(e)=>{
      setUserInput((prevState)=> {
         return  {...prevState,amount: e.target.value};
       }); 
     }
     const LocationHandler=(e)=>{
      setUserInput((prevState)=> {
         return  {...prevState,location: e.target.value};
       }); 
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
