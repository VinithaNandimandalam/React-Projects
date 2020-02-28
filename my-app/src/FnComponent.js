import React, { useState } from 'react';

const FnComponent = (props) => {

    let name = 'chris'

    // state={
    //     show:false
    // }

    // this.setState({});

    //     const [state, setState] = useState({show:false});

    // setState({show:!state.show});

    // show=true;

    // const [show,setShow]= useState(true);

    const [currState, setState] = useState({
        name:'chris',
        count:0
    });

    const onChangeNamehandler = (e) => {
        
        setState({name:e.target.value},{count: currState.count});
//shortcut if we have more value to be passed
       // setState({...currState,count: currState.count})

    }
    return <div>
        Hello Function Component<br />
        {currState.name}
        <br />
        <input type='text' onChange={onChangeNamehandler} value={currState.name}></input>
        <br/>
        <button onClick={()=>{setState({count:currState.count+1, name:currState.name})}}>Increment</button>
        {/* 
        shortcut if we have to pass more values
        <button onClick={()=>{setState({...currState, name:currState.name})}}>Increment</button> */}

    <br/>
    {currState.count}
    </div>
}
export default FnComponent;