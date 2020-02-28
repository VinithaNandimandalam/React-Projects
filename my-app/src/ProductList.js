import React from 'react';
import ProductInfo from './ProductInfo';



class ProductList extends React.Component {
    // render(){
    //     return <div>
    //         <ProductInfo title='Designer Tiles' desc ='3*3 white authentic tiles'price='5' sale={true} category='Hardware'/>
    //         <ProductInfo title='Samsung LCD TV' desc='40 inch TV' price='5' sale={false} category='Electronics'/>
    //     </div>
    // }

    prodList = [{
        prodCode:'1',
        code: 'p1',
        title: 'Designer Tiles',
        desc: '3*3 white authentic tiles',
        price: '5',
        sale: true,
        category: 'Hardware'
    },
    {
        prodCode:'2',
        code: 'p2',
        title: 'Samsung LCD TV',
        desc: '40 inch TV',
        price: '500',
        sale: false,
        category: 'Hardware'
}];
state={
    show:false
}

render(){
    //generate JSX array using map fn

const ProdJSx = this.prodList.map(prod=>{
   return <ProductInfo key={prod.code}
   prodCode={prod.prodCode}
   title={prod.title}
   desc={prod.desc}
   category={prod.category}
   price={prod.price}
   sale={prod.sale}/>
})
return <div>
    <h2>{this.props.vendor}</h2>
    <div>
        <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle</button>
    </div>
    {ProdJSx}
</div>
}
}

export default ProductList;