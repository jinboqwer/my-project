import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

//UI组件   无状态组件

const TodoListUI = (props) => {
    return (
        <div>
            <div style={{ margin: '10px' }}>
                <Input
                    value={props.inputValue}
                    placeholder="Basic usage"
                    style={{ width: '300px', marginRight: '10px' }}
                    onChange={props.handleInputChange}
                />
                <Button onClick={props.handleClick}>提交</Button>
            </div>
            <List
                style={{ width: '300px', margin: '10px' }}
                bordered
                dataSource={props.data}
                renderItem={(item, index) => (<List.Item onClick={() => {
                    props.handleItemclick(index)
                }}>{item}</List.Item>)}
            />
        </div>
    )
}

// class TodoListUI extends Component {
//     render() {
//         return (
//             <div>
//                 <div style={{ margin: '10px' }}>
//                     <Input
//                         value={this.props.inputValue}
//                         placeholder="Basic usage"
//                         style={{ width: '300px', marginRight: '10px' }}
//                         onChange={this.props.handleInputChange}
//                     />
//                     <Button onClick={this.props.handleClick}>提交</Button>
//                 </div>
//                 <List
//                     style={{ width: '300px', margin: '10px' }}
//                     bordered
//                     dataSource={this.props.data}
//                     renderItem={(item, index) => (<List.Item onClick={() => {
//                         this.props.handleItemclick(index)
//                     }}>{item}</List.Item>)}
//                 />
//             </div>
//         )
//     }
// }

export default TodoListUI;