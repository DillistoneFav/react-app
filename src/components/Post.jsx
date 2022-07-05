import React from 'react';

const Post = (props) => {
    return (
        <div>
            <div className="post">
                <strong>{props.number}. {props.post.title}</strong>
                <div className="description">
                    {props.post.title} - {props.post.body}
                </div>
                <div className="post__btns">
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    );
};

export default Post;