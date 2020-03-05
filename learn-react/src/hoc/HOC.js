import React,{useState} from 'react';
import {AuditMe} from './lib';

const SampleComponent=(props)=>{
    return <div classname='comp'>{props.name}</div>
}


const Aux=(props)=>props.children;

const Wrapper =(props)=>{
    return <div className={props.className}>{props.children}</div>
}


const MainComponent=(props)=>{
    return <Wrapper className='wrapper'>
        <SampleComponent name='chris'/>
        <SampleComponent name='dave'/>
    </Wrapper>
}


//export default WithClass(MainComponent,'WithClass');

//export default MainComponent;

class ClsComponent extends React.Component{
    state={name:''}
    componentDidUpdate(){
        console.log('did update',this.state.name);
    }

    render(){
        return <div className='comp'>
            <input type='text' onChange={(e)=>this.setState({name:e.target.value})}/>
        {this.state.name}
        </div>
    }
}

export default AuditMe(ClsComponent);