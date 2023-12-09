
const ExpenseForm= () =>{
    const TitleHandler=(e)=>{
       console.log(e.target.value);
    }
    const DateHandler=(e)=>{
        console.log(e.target.value);
     }
     const AmountHandler=(e)=>{
        console.log(e.target.value);
     }

    return(<div>
        <form>
        <label>Expense Title</label>
        <input type="Text" onChange={TitleHandler}></input>
        <label>Expense Amount</label>
        <input type="Number" min="0.01" step="0.01" onChange={AmountHandler}></input>
        <label>Date</label>
        <input type="date" onChange={DateHandler} ></input>
        <button >Add Expense</button>
        </form>
    </div>

    );
}


export default ExpenseForm ;
