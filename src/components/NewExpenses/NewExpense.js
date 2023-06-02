import React ,{useState} from "react";
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense =(props)=>{
    const [isEditing,setIsEditing]=useState(false);
    const saveexpensedatahandler=(enteredexpensedata) => {
    const expensedata={
        ...enteredexpensedata,
        id:Math.random().toString()
        
    }
    props.onaddExpense(expensedata);
    isEditing(false);
}
const startEditingHandler=()=> {
    setIsEditing(true);
}
const stopEdintgHandler =()=>{
    setIsEditing(false);
}
    return <div className="new-expense">
      { !isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
     { isEditing &&  <ExpenseForm onsaveexpensedatahandler={saveexpensedatahandler} oncancel={stopEdintgHandler}/>}
    </div>
};
export default NewExpense; // connect app and form