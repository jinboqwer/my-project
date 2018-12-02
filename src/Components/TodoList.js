import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from '../store/index.js';
import { getCHANG_INPUT_VALUE, getADD_VALUSE, getDELETE_ITEM } from '../store/actionCreators.js';



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
        const action = getDELETE_ITEM(index)
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState)
    }



    render() {
        return (
            <div>
                <div style={{ margin: '10px' }}>
                    <Input
                        value={this.state.inputValue}
                        placeholder="Basic usage"
                        style={{ width: '300px', marginRight: '10px' }}
                        onChange={this.handleInputChange}
                    />
                    <Button onClick={this.handleClick}>提交</Button>
                </div>
                <List
                    style={{ width: '300px', margin: '10px' }}
                    bordered
                    dataSource={this.state.data}
                    renderItem={(item, index) => (<List.Item onClick={this.handleItemclick.bind(this, index)}>{item}</List.Item>)}
                />
            </div>
        )
    }
}

export default TodoList;
