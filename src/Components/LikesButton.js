import React from "react";
import './LikesButton.css';
import like from './like.svg';

class LikesButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes:0
        }
        this.insqwer=this.insqwer.bind(this)
    }
    insqwer() {
        this.setState({
            likes: ++this.state.likes
        })
    }
    render() {
        return (
            <div>
                 {/* <input type="button"   value={this.state.likes} />     */}
                 <button onClick={this.insqwer}>
                     <img src={like} /> 
                     {this.state.likes}
                 </button>
            </div>
        )
    }
}
export default LikesButton