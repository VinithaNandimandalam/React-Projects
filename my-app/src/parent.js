import React, { PureComponent } from 'react';
import {FnChild, ClsChild} from './Children';

class Parent extends PureComponent {

    state = {
        items: [],
        form: {
            cls: false, 
            name: ''
        }
    }

    nameAddHandler = (e) => {
        const formCopy = {...this.state.form};
        formCopy.name = e.target.value;
        this.setState({form: formCopy})
    }

    // nameUpdateHandler = (id, name) => {
    //     const matchingItem = this.state.items.filter(item=>item.id === id);
    //     matchingItem.name = name;
    //     this.setState({items: [...this.state.items, matchingItem]})
    // }

    checkClassHandler = (e) => {
        const formCopy = {...this.state.form};
        formCopy.cls = !this.state.form.cls;
        this.setState({form: formCopy})
    }

    addItemHandler = () => {
        let val = Math.round(Math.random()*1000);
        const copy = [...this.state.items];
        copy.push({id:val, name:this.state.form.name, cls:this.state.form.cls});
        this.setState({items: copy});
    }

    removeItemHandler = (id) => {
        const filtered = this.state.items.filter(item=>item.id !== id);
        this.setState({items:filtered});
    }

    render() {
        console.log('Parent rendering...');
        return <div>
            <div>
                <input type='text' onChange={this.nameAddHandler}
                value={this.state.form.name} style={{marginRight:'15px'}}/>
                <input type='checkbox' checked={this.state.form.cls} 
                    onChange={this.checkClassHandler}/> Class 
                <button onClick={this.addItemHandler}  style={{marginLeft:'15px'}}>Add</button>
            </div>
            <br/>
            {
                this.state.items.length > 0 ? <button onClick={()=>{
                    const altered = this.state.items.map(item=>{
                        return {...item, name: 'Hi '+item.name}
                    })
                    this.setState({items: altered})
                }}>Update Children</button> : null
            }
            {
                this.state.items.map( item => {
                    return item.cls ? <ClsChild 
                            onRemoveItem={()=>this.removeItemHandler(item.id)}
                            key={item.id}
                            id={item.id}
                            name={item.name}/> : 
                            <FnChild onRemoveItem={()=>this.removeItemHandler(item.id)} 
                            key={item.id}
                            id={item.id}
                            name={item.name}/>
                })
            }
        </div>
    }
}

export default Parent;






























// import React from 'react';
// import {Child1,Child2} from './Children';
// import ClassComponent from './ClassComponent';

// class Parent extends React.Component{

//     state={
//         show:false,
//         count:0
//     }

// onCounterIncrementHandler=()=>{
//     this.setState({count: this.state.count+1});
//     }
//      onRemoveItemHandler=(props)=>{
//         this.setState({show:!this.state.show});
//     }

//     render() {
//         console.log('parent rendering');
        
//        return <div>
//            <div>
//                {this.state.count}<br/>
//                <button onClick={this.onCounterIncrementHandler}>Increment</button>
//            </div>
//            <button onClick={this.onRemoveItemHandler}>{this.state.show? 'No':'Yes'}</button>
//           <Child1/>
//             <Child2/>
//             <ClassComponent/>
//         </div>
//     }
// }
// export default Parent;