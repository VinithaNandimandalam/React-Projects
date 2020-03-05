import React from 'react';

import { connect } from 'react-redux';

export const TodoList = props => {
    return <div><button onClick={props.toggle}>Toggle</button>
        {props.items.map(item => {
            return props.comptd ? <TodoItem key={item.id} show={props.comptd} item={item}></TodoItem> : null;
        })
        }
    </div>

}

export const TodoItem = props => {
    const style = { backgroundColor: '#a30', margin: '10px 0', padding: '5px' }
    style.backgroundColor = props.item.completed ? '#3a0' : style.backgroundColor;
    return <div style={style}>{props.item.title}</div>;

}

const mapStateToProps = state => { comptd: state.completed }

const mapDispatchToProps = dispatch => { toggle: () => dispatch({ type: 'CHANGE' }) }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);