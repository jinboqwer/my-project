import React from 'react'

class DigitalClock extends React.Component {
    constructor(props) {
        super (props)
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() { 
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }
    componentDidUpdate(prevProps,prevState) {
        console.log(this.timer)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render() {
        return (
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }       
}

export default DigitalClock