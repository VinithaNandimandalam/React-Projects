import React, {useState, PureComponent} from 'react';

export const FnChild = (props) => {
    console.log('Fn Child rendering..');

    const [currState, setState] = useState({active:false})
    
    return <div className='FnCmp' id={props.id}>
        <button onClick={()=>{setState({active:!currState.active})}}>{currState.active ? 'Deactivate' : 'Activate'}</button>
        <button onClick={props.onRemoveItem}>Remove</button>
        {props.name} [{props.id}]
        </div>
}

export class ClsChild extends React.Component {

    constructor(props) {
        super(props)
        this.state = {active: false, fetchData: false, fetched: false}
        console.log('[ClsChild] constructor called');
    }

    componentDidMount() {
        console.log('[ClsChild] componentDidMount called');
    }

    render() {
        console.log('[ClsChild] render called');
        return <div className='ClsCmp' id={this.props.id}>
                <button onClick={()=>{this.setState({active:!this.state.active})}}>{this.state.active ? 'Deactivate' : 'Activate'}</button>
                <button onClick={this.props.onRemoveItem}>Remove</button>
                {this.props.name} [{this.props.id}]
                <div>
                    {
                        !this.state.fetchData ?
                            <button onClick={()=>{
                                setTimeout(() => {
                                    this.setState({fetched:true})
                                }, 1500);
                                this.setState({fetchData:true})
                                }}>Validate</button>
                                : null
                    }
                    {this.state.fetched ? 'Data Received !!' : ( this.state.fetchData ? 'Loading...' : null)}
                </div>
            </div>
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[ClsChild] shouldComponentUpdate called');
        console.log('[ClsChild] ['+this.props.name+'], nextProps: ', nextProps.name);
        if(this.props.name === nextProps.name) {
            return false;
        }
        return true;
    }
    
    componentDidUpdate() {
        console.log('[ClsChild] componentDidUpdate called');
        setTimeout(() => {
            if(!this.state.fetchData) {
                this.setState({fetchData:true})
            }
        }, 1500);
    }
    // componentWillUnmount(){
    //     console.log('Comp unmounting ['+this.props.id+']');
    // }
}

























// import React from 'react';

// const Child1 = () => {
//     return <div>this is child1 component</div>
// }

// class Child2 extends React.Component {
//     render() {
//         return <div>
//             <Child1 />
//             <Child1 />
//         </div>
//     }
// }
//     const Child=(props)=>{
       
//     }

// export { Child1, Child2 };