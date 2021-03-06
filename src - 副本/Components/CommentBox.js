import React from 'react'
//state练习
// class CommentBox extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             value: ''
//         }
//         this.textChange = this.textChange.bind(this)
//         this.alertChange = this.alertChange.bind(this)
//     }
//     textChange(event) {
//         this.setState({
//             value: event.target.value
//         })
//     }
//     alertChange(event) {
//         alert(this.state.value);
//         event.preventDefault()
//     }
//     render() {
//         return (
//             <form onSubmit={this.alertChange}>
//                 <label for='inputText'>请留言</label>
//                 <input onChange={this.textChange} id='inputText' value={this.state.value} />
//                 <button>提交</button>
//             </form>
//         )
//     }
// }


//受控组件
class CommentBox extends React.Component {
    constructor(props) {
        super(props)
        
        this.textChangeHandle = this.textChangeHandle.bind(this)
        this.commentChange = this.commentChange.bind(this)
    }

    shouldComponentUpdate (nextProps,nextState) {
        if (nextProps.value !== this.props.value) {
            return true;
        }
        return false;
    }
    
    textChangeHandle(event) {
        const { textChange } = this.props
        textChange(event)
        
    }
    commentChange(event) {
        event.preventDefault()
        const { value, addComment} = this.props
        if (value) {
            addComment(value)
        }        
    }
    // for 要换成htmlFor
    render() {
        return (
            <form onSubmit={this.commentChange}>
                <label htmlFor='inputText'>请留言</label>
                <input onChange={this.textChangeHandle} id='inputText' value={this.props.value} />
                <button>提交</button>
                <p>已有{this.props.commentsLength}条评论</p>
            </form>
        )
    }
}


//非受控组件
// class CommentBox extends React.Component {
//     constructor(props) {
//         super(props)
//         this.commentChange = this.commentChange.bind(this)
//     }
//     //需要优化
//     commentChange(event) {
//         event.preventDefault()
//         if (this.inputValue.value) {
//             this.props.addComment(this.inputValue.value)
//             this.inputValue.value = ""
//         }         
//     }
    
//     render() {
//         return (
//             <form onSubmit={this.commentChange}>
//                 <label for='inputText'>请留言</label>
//                 <input ref={(inputValue) =>(this.inputValue = inputValue)} id='inputText' />
//                 <div>
//                     <button>提交</button>
//                     <p>已有{this.props.comments.length}条评论</p>
//                 </div>
//             </form>
//         )
//     }
// }
export default CommentBox