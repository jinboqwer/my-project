import React from 'react'
import propTypes from 'prop-types'


class CommentList extends React.Component {
       
    constructor (props) {
        super(props) 
        this.deleteComment = this.deleteComment.bind(this)
    }
    deleteComment(index) {
        this.props.deleteSomeComment(index)
        
    }

    shouldComponentUpdate (nextProps,nextState) {
        if (nextProps.comments !== this.props.comments) {
            return true;
        }
        return false;
    }

//onClick={() => this.deleteComment(index)} 箭头函数的参数为event事件
// 使用bind的一种写法 onClick={this.deleteComment.bind(this,index)}
//text没传入
    render() {
        const { comments, text } = this.props
        return (
            <div>
                <label>评论列表</label>
                <ul>
                    {comments.map((comment, index) => {
                        return (
                            <li key={index} >
                                {text}
                                {comment}
                                <button onClick={() => this.deleteComment(index)}>
                                删除
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
        
    }
}

//函数形式
// const CommentList = (props) => {
//      deleteComment(props) {
        
//      }
//     return (
//         <div>
//             <label>评论列表</label>
//             <ul onClick= {deleteComment}>
//                 {props.comments.map((comment, index) => {
//                     return (
//                         <li key={index} id={index}>
//                             {comment}
//                             <button>删除</button>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </div>
//     )
// }

//数据类型校验 isRequired是必要值
CommentList.propTypes = {
    deleteSomeComment:propTypes.func,
    comments:propTypes.array.isRequired
}
//默认数值 
CommentList.defaultProps = {
    text:'测试'
}
export default CommentList