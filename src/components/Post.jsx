import React from 'react';
import MyButton from './UI/button/MyButton';

const Post = (props) => {
    return (
        <div>
            <div className="post">
                <strong>{props.number}. {props.post.title}</strong>
                <div className="description">
                    Javascript - {props.post.description}
                </div>
                <div className="post__btns">
                    <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
                </div>
            </div>
        </div>
    );
};

export default Post;