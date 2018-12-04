import React, { Component } from 'react';
import store from '../store/index.js';
import { getTODU_LIST, getCHANG_INPUT_VALUE, getADD_VALUSE, getDELETE_ITEM } from '../store/actionCreators.js';
import TodoListUI from './TodoListUI.js';


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleItemclick = this.handleItemclick.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    handleInputChange(e) {
        const action = getCHANG_INPUT_VALUE(e.target.value)
           
        store.dispatch(action);
    }

    handleClick() {
        if (this.state.inputValue) {
            const action = getADD_VALUSE();
            store.dispatch(action);
        }
        
    }

    handleItemclick(index) {
        const action = getDELETE_ITEM(index);
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState);
    }

    componentDidMount() {
        const action = getTODU_LIST();
        store.dispatch(action);
    }

    render() {
        return <TodoListUI 
                   inputValue={this.state.inputValue}
                   data={this.state.data}
                   handleInputChange={this.handleInputChange}
                   handleClick={this.handleClick}
                   handleItemclick={this.handleItemclick}
               />
    }
}

export default TodoList;
