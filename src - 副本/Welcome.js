import React from 'react'

class Welcome extends React.Component {

    render() {
        const todoList = ["lean react","lean weixin"],
              isLogin = true,
              test = <div>React</div>;
              console.log(test)
        return (
            <div className="this">
                <h1>Hello World</h1>
                {isLogin ? <p>欢迎你</p> : <p>请登录</p>}
                <ul>
                    {todoList.map(item => <li>{item}</li>)}
                </ul>
            </div> 
        )  
    }
}

export default Welcome