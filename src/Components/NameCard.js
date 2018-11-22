import React from 'react';
import LikesButton from './LikesButton';
import DigitalClock from './DigitalClock';

const NameCard = (props) => {
    const { name, number, isHunman, tags } = props 
    return (
        <div className="alert alert-success">
            <header>
                <h4 className="alert-heading">姓名：{name}</h4>
                <ul>
                    <li>
                        电话：{number}
                    </li>
                    <li>
                        {isHunman ? "人类" : "外星生物"}
                    </li>
                </ul>
            </header>
            <hr />
            <p>
                好友印象：{tags.map((tag, index) => {
                    return <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
                })}
            </p>
            <LikesButton />
            <DigitalClock />
        </div>
    )
}

/* class NameCard extends React.Component {
    render() {
        const { name, number, isHunman, tags } = this.props;
        return (
            <div className="alert alert-success">
                <header>
                    <h4 className="alert-heading">姓名：{name}</h4>
                    <ul>
                        <li>
                            电话：{number}
                        </li>
                        <li>
                            {isHunman ? "人类" : "外星生物"}
                        </li>
                    </ul>
                </header>
                <hr />
                <p>
                    好友印象：{tags.map((tag, index) => {
                        return <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
                    })}
                </p>
            </div>
        )
    }
} */

export default NameCard