import ExpenseItem from './components/ExpenseItem';

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    Location: 'Delhi'
  },

  { 
    id: 'e2',
   title: 'New TV', 
   amount: 799.49, 
   date: new Date(2021, 2, 12),
   Location: 'Agra'
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    Location: 'Goa'
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    Location: 'Mumbai'
  },
];

function expensedata(){
  const arr=[];
for(let i=0;i<4;i++){
  
  
 arr.push(<ExpenseItem title={expenses[i].title} amount={expenses[i].amount} date={expenses[i].date} location={expenses[i].Location}></ExpenseItem>);
}
return arr;
}
function App() {
  
  return (
    <div>
      <h2>Let's get started! </h2>
{expensedata()}

    </div>
  );

}
export default App;
