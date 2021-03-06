import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import CommentBox from './Components/CommentBox';
import CommentList from './Components/CommentList';
import ThemeContext from './theme-context';
import ThemedBar from './Components/ThemedBar';

//context练习 浅色主题和深色主题变换
const themes = {
    light: {
        classNames: 'btn btn-primary',
        bgColor: '#eee',
        color: '#000'
    },
    dark: {
        classNames: 'btn btn-light',
        bgColor: '#222',
        color: '#fff'
    }
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            comments: [],
            theme: 'light'
        }
        this.addComment = this.addComment.bind(this)
        this.deleteSomeComment = this.deleteSomeComment.bind(this)
        this.changeTheme = this.changeTheme.bind(this)
        this.textChange = this.textChange.bind(this)
    }
    
    // componentWillMount() {
    //     console.log('componentDidMount')
    // }
    //点击切换样式
    changeTheme(theme) {
        this.setState(() => ({
            theme //es6写法 等价于theme：theme
        }))
    }
    //删除CommentList组件的评论
    deleteSomeComment(index) {
        
        //const newComments = this.state.comments 直接修改state不合适
        
        this.setState((preState) => {
            const newComments = [...preState.comments]
            newComments.splice(index, 1)
            return {
                comments: newComments
            }
        })
    }
    //es6  增加评论
    addComment(comment) {

        this.setState((preState) => ({
            comments: [...preState.comments, comment],  //展开运算符
            value: ''
        }))
        
            
    }
    //更新输入框的输入
    textChange(event) {
        const value = event.target.value;
        this.setState(() => ({
            value: value
        }))
    }

    //试验ajax请求
    componentDidMount() {
        
        axios.get('./api/todolist').then((ref) => {
           this.setState(() => ({
               comments:[...ref.data]
           }))
        }).catch(() => {
            alert('error')
        })
    }

    render() {
        const { value, comments } = this.state
        return (
            <ThemeContext.Provider value={themes[this.state.theme]}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1>React练习</h1>
                        <a
                            onClick={() => (this.changeTheme('light'))}
                            className="btn btn-light"
                            href="#theme-switcher"
                        >
                            浅色主题
                        </a>
                        <a
                            onClick={() => (this.changeTheme('dark'))}
                            className="btn btn-secondary"
                            href="#theme-switcher"
                        >
                            深色主题
                        </a>
                    </header>
                    <ThemedBar />
                    <CommentList deleteSomeComment={this.deleteSomeComment} comments={comments} />
                    <CommentBox textChange={this.textChange} value={value} addComment={this.addComment} commentsLength={comments.length} />
                </div>
            </ThemeContext.Provider>
        );
    }
}

export default App;
