import React from 'react';
import MyButton from './UI/button/MyButton';

const Post = (props) => {
    return (
        <div>
            <div className="post">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div className="description">
                    {props.post.body}
                </div>
                <div className="post__btns">
                    <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
                </div>
            </div>
        </div>
    );
};

export default Post;