import React from 'react';

const ProductInfo=(props)=>{
    console.log(props);

    // function alertbox(){
    //     console.log(props.prodCode);
    //     alert(props.prodCode);
    // }

  const onRemoveProductHandler=(code)=>{
        alert('product to be rendered' +code)
    }
    return <div>
        <div className='product'>
          
            <div>{props.sale? 'onSale' : null}</div>
            <p>{props.prodCode}</p>
            <h4>{props.title}</h4>
            <h5>{props.category}</h5>
            <p>{props.desc}</p>
            <p>${props.price}</p>
        </div>
        <div>
            <button>Add to cart</button>
            {/* <button type="button" onClick={alertbox} >Remove</button> */}
            <button onClick={()=>{onRemoveProductHandler(props.prodCode)}} >Remove</button>
        </div>
    </div>
}

export default ProductInfo;