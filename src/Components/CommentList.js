import React from 'react'


class CommentList extends React.Component {
       
    constructor (props) {
        super(props) 
        this.deleteComment = this.deleteComment.bind(this)
    }
    deleteComment(index) {
        this.props.deleteSomeComment(index)
        
    }
//onClick={() => this.deleteComment(index)} 箭头函数的参数为event事件
// 使用bind的一种写法 onClick={this.deleteComment.bind(this,index)}
    render() {
        return (
            <div>
                <label>评论列表</label>
                <ul>
                    {this.props.comments.map((comment, index) => {
                        return (
                            <li key={index} >
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

export default CommentList