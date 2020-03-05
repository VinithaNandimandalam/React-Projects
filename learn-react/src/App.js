import React from 'react';
// import MainComponent from './hoc/HOC';
// import { AuditMe } from './hoc/lib';
import Routing from './routing/Routing';
import {BrowserRouter as Router} from 'react-router-dom';
import Counter from './redux/Counter';
import RegistrationForm from './Forms/Forms';

const App=()=>{
  return <div>
    {/* <Router>
    <Routing/>
    </Router> */}
    {/* <Counter/> */}
    <RegistrationForm/>
  </div>

}

export default RegistrationForm;
