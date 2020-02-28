import React from 'react';
import ProductList from './ProductList';


 const Catalog=()=>{

    const vendor='ABC Retail'
    // function nameChange()
    // {
    // alert('vinitha');
    // }

const onNameChangeHandler=(e)=>{
    console.log(e.target.value);
}
    return (
    <div>
    <div >Enter Vendor Name:<input type='text' id='name'></input>
    {/* <button type="button" onClick={nameChange} >Submit</button>*/}
    <button type="button" onChange={onNameChangeHandler} >Submit</button>
</div> 
    <ProductList/>
    </div>
    
    )
}
export default Catalog;