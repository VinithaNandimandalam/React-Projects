import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore , applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
// import RegistrationForm from './Forms/Forms';
// import reducer from './redux/reducer';
import thunk from 'redux-thunk';
import reducer from './testing/TodoReducer';
//middleware
// const logger = store => {
//     return next => {
//         return action => {
//             console.log('Action :',action);
            
//             return next(action);
//         }
//     }
// }
// const store = createStore(reducer,applyMiddleware(logger,thunk));

const store=createStore(reducer);

ReactDOM.render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

