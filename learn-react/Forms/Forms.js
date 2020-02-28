import React from 'react';

export class RegistrationForm extends React.Component{
nameRef=React.createRef();
emailRef=React.createRef();

submitRegistration=(e)=>{
    e.preventDefault();
    console.log('Name : ',this.nameRef.current.value);
    console.log('Email : ',this.emailRef.current.value);

}

componentDidMount(){
    this.nameRef.current.focus();
}

render(){
    return <div>
        <form onSubmit={this.submitRegistration}>
            <input type='text' ref={this.nameRef}
            defaultValue='Chris'
            placeholder='Name'/><br/>
             <input type='text' ref={this.emailRef}
            defaultValue='Chris@testmail.com'
            placeholder='Email'/><br/>
            <button type='submit'>Registration</button>
        </form>
    </div>
}

}

export default RegistrationForm;