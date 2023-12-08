import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

const ExpenseItem= (props) => {
  
    return (       
        <div className="expense-item" id="main">
       <ExpenseDate date={props.date}/>
        <ExpenseDetails title={props.title} location={props.location} amount={props.amount}/>
        
<button onClick={(e)=>{
  alert("deleting");
{ let item = e.target.parentElement;
  item.remove() }
}
}>DELETE</button>
        </div>
      );
}

export default ExpenseItem;