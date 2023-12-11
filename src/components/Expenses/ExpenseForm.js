import  React,{ useState } from 'react';
import ExpenseItem from './ExpenseItem';
import expenses from './Expenses';

let title,amount,date,location;
const ExpenseForm= () =>{
    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState('');
    const [date,setDate]=useState('');
   const [location,setLocation]=useState('');
  /* const [userInput,setUserInput]=useState({
      title:'',
      date:'',
      location:'',
      amount:''
   })*/
    /*const TitleHandler=(e)=>{
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
     }*/
     const TitleHandler=(e)=>{
      console.log(e.target.value);
       setTitle(e.target.value); 
      console.log(title);
   }
   const DateHandler=(e)=>{
       console.log(e.target.value);
       setDate(e.target.value);
       console.log(date);
    }
    const AmountHandler=(e)=>{
       console.log(e.target.value);
       setAmount(e.target.value);
       console.log(amount);
    }

    const LocationHandler=(e)=>{
       setLocation(e.target.value);
       console.log(location);
    }
    
  const SubmitHandler= (event) => {
event.preventDefault();
    
    const expenseData={
      title:title,
      date:new Date(date),
      amount:amount,
     location:location
    }
    
    console.log(expenseData);
   
  };
    return(<div>
        <form onSubmit={SubmitHandler}>
        <label>Expense Title</label>
        <input type="Text" onChange={TitleHandler}></input>
        <label>Expense Location</label>
        <input type="Text" onChange={LocationHandler}></input>
        <br/>
        <label>Expense Amount</label>
        <input type="Number" min="0.01" step="0.01" onChange={AmountHandler}></input>
        <label>Date</label>
        <input type="date" onChange={DateHandler} ></input>
        <br/>
        <button type="submit" >Add Expense</button>
        </form>
    </div>

    );
}


export default ExpenseForm ;
