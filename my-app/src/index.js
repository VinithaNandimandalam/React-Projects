import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Parent from './parent';
import ProductList from './ProductList';
import FnComponent from'./FnComponent';
import Catalog from './catalog';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

// const FnComponent=()=>{
// return <h1>Hello Function Component</h1>
// }

// class ClassComponent extends React.Component{
// render(){
//     return <div>Hello class component</div>
// }
// }
ReactDOM.render(<div><parent/></div>, document.getElementById('root'));
//ReactDOM.render(<div><Parent/></div>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
