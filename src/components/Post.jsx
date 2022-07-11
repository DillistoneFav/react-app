import React from 'react';
import MyButton from './UI/button/MyButton';
import { useNavigate } from 'react-router-dom';

const Post = (props) => {
    const router = useNavigate();
    return (
        <div>
            <div className="post">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div className="description">
                    {props.post.body}
                </div>
                <div className="post__btns">
                    <MyButton onClick={() => router(`/posts/${props.post.id}`)}>Открыть</MyButton>
                    <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
                </div>
            </div>
        </div>
    );
};

export default Post;