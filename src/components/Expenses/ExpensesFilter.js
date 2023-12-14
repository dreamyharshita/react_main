import React from "react";
import './ExpensesFilter.css';

const ExpensesFilter = (props) =>{
    const dropDownChangeHandler = (event) =>{
        props.onChangeFilter(event.target.value);
       
    };

return(<div className="filter__style">

            <label className="filter__heading">Filter By Year</label>
            <select value={props.selected} onChange={dropDownChangeHandler} className="dropdown">
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>);
}

export default ExpensesFilter;