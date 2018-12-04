import React, { Component } from 'react';
import store from '../store/index.js';
import { getTODU_LIST, getCHANG_INPUT_VALUE, getADD_VALUSE, getDELETE_ITEM } from '../store/actionCreators.js';
import TodoListUI from './TodoListUI.js';
import { connect } from 'react-redux';

class TodoList extends Component {   
    componentDidMount() {
        const action = getTODU_LIST();
        store.dispatch(action);
    }

    render() {
        return <TodoListUI 
                   inputValue={this.props.inputValue}
                   data={this.props.data}
                   handleInputChange={this.props.handleInputChange}
                   handleClick={this.props.handleClick}
                   handleItemclick={this.props.handleItemclick}
               />
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        data: state.data
    }
}

//dispatch使用store.dispatch 
const mapDispacthToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            const action = getCHANG_INPUT_VALUE(e.target.value)       
            dispatch(action);
        },
        handleClick() {
            const action = getADD_VALUSE();
            dispatch(action);        
        },
        handleItemclick(index) {
            const action = getDELETE_ITEM(index);
            dispatch(action);
        }
    }   
}

export default connect(mapStateToProps,mapDispacthToProps)(TodoList);
