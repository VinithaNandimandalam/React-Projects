import React from 'react';

export class ClsComponent extends React.Component{
    inputRef=React.createRef();
    addInputHandler=()=>{
        console.log(this.inputRef.current.value);
    
    }
    render(){
        return <div>
            <input type='text' ref={this.inputRef}/>
            <button onClick={this.addInputHandler}>Add</button>
        </div>
    }
}


export const MainComponent=()=>{
    const clsRef=React.createRef();
    const checkRefHandler=()=>{
    console.log('Cls Ref: ', clsRef.current);
    }

    return <div>
        <ClsComponent ref={clsRef} test='Sample'/>
        <button onClick={checkRefHandler}>Check</button>
    </div>
}