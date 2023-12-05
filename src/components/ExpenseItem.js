import './ExpenseItem.css';

function ExpenseItem(){
  const LocationOfExpenditure="Shopping Mall";
    return (
        <div className="expense-item">
         <div >December 20 2023</div>
         <div className='expense-item__description'>
          <h2>Car Insurance</h2>
          <h2>{LocationOfExpenditure}</h2>
          <div className='expense-item__price'>$234.45</div>
         </div>
          
        </div>
      );
}

export default ExpenseItem;