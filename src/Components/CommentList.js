import React from 'react'

const CommentBox = (props) => {
    return (
        <div>
            <label>评论列表</label>
            <ul>
                {props.comments.map((comment, index) => {
                    return (
                        <li key={index}>{comment}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default CommentBox