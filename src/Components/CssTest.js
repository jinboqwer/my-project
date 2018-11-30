import React, { Component, Fragment } from 'react';
import './CssTest.css';

class CssTest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
        this.handleToggole = this.handleToggole.bind(this)
    }
    
    handleToggole() {
        
        this.setState(() => ({
            show: !this.state.show
        }))
    }

    render() {
        return (
            <Fragment>
                <div className={this.state.show ? 'show' : 'hidden'}>hello world</div>
                <button onClick={this.handleToggole}>toggole</button>
            </Fragment>
            
        )
    }
}
export default CssTest