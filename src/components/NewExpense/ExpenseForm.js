import  React,{ useState } from 'react';

import './ExpenseForm.css';

//let title,amount,date,location;
const ExpenseForm= (props) =>{
    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState('');
    const [date,setDate]=useState('');
  
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
      
       setTitle(e.target.value); 
      
   }
   const DateHandler=(e)=>{
     
       setDate(e.target.value);
      
    }
    const AmountHandler=(e)=>{
       
       setAmount(e.target.value);
      
    }

   
  
  const SubmitHandler= (event) => {
event.preventDefault();
    
    const expenseData={
      title:title,
      date:new Date(date), 
      amount:amount
    
    }
    
    props.onSaveExpenseData(expenseData);
   setTitle('');
   setAmount('');
   setDate('');
 
  };
 
  
     
 
    return(<div >
      
      <form onSubmit={SubmitHandler} className='form_style'>
  <label>Expense Title</label>
  <input type="Text" onChange={TitleHandler} value={title}></input>
  
  <br/>
  <label>Expense Amount</label>
  
  <input type="Number" min="0.01" step="0.01" onChange={AmountHandler} value={amount}></input>
  <br/>
  <label>Date</label>
  <br/>
  <input type="date" onChange={DateHandler} value={date} ></input>
  <br/><br/>
  <button type="button" onClick={props.onCancel}>Cancel</button>
  <button type="submit" >Add Expense</button>
  </form>
    </div>

    );
}


export default ExpenseForm ;
