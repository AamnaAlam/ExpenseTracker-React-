import React,{useRef} from 'react';

function IncomeForm({income,setIncome}){
const desc=useRef(null);
const date=useRef(null);
const price=useRef(null);

const AddIncome=(e)=>{
    e.preventDefault();
    let d=date.current.value.split("-");
    let newD=new Date(d[0],d[1]-1,d[2]);
    console.log(desc.current.value);
    console.log("aamna");

   setIncome([...income,{
    "desc":desc.current.value,
    "price":price.current.value,
    "date":newD.getTime()
   }]);
   desc.current.value="";
   price.current.value=null;
   date.current.value=null;

}

    return(
        <form className="income-form" onSubmit={AddIncome}>
        <div className='form-inner'>
        <input type="text" name="desc" id="desc" placeholder="enter expense desc.." ref={desc}></input>  
        <input type="number" name="price" id="price" placeholder="enter amount.." ref={price}></input> 
        <input type="date" name="date" id="date"  ref={date}></input>    
        <input type="submit" value="Add Income"></input> 
          
         </div>
        </form>
    );
     
}

export default IncomeForm;
