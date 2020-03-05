import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {incAction,addAction,resAction,asyncIncAction} from './action';
const Counter = props => {
    useEffect(() => {
        console.log('rendering ', props)
    })
    //const [state, setState] = useState({ count: 0 })
    return <div>
        <Producer {...props}/>
        <Receiver {...props}/>
    </div>

}

const Producer = props => {
    const [val, setVal] = useState(0);
    return <div>
        <p>Without Redux implementation</p>
        <input type='text' size='2' maxLength='2' onChange={(e) => setVal(+e.target.value)} value={val} />
        {/* <button onClick={()=>console.log('Add '+val)}>Add</button><br/> */}
        <button onClick={() => props.addCtr(val)}>Add</button><br />
        <button onClick={props.incCtr}>Increment</button><br />
        {/* <button onClick={()=>console.log('Reset')}>Reset</button> */}
        <button onClick={props.resCtr}>Reset</button>
    </div>
}

const Receiver = props => {
    return <div>
         Result: {props.ctr}
     </div>
}

const mapStateToProps = state => {
    return {
        ctr: state.count
    }
}

const mapDispatchToProps= dispatch =>{
    return {
        incCtr: () => dispatch(asyncIncAction()),
        addCtr: (val) => dispatch(addAction(val)),
        resCtr: () => dispatch(resAction()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);