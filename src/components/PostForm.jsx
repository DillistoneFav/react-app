import React from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import { useState } from 'react';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body:''});

    const addNewPost = (event) => {
        event.preventDefault();

        if (post.title !== '' && post.body !== '') {

        const newPost = {
            ...post, id: Date.now(),
        }
        create(newPost);
        setPost({title: '', body: ''});
    };
};

    return (
        <form className="form-add">
        <MyInput 
          onChange={(event) => {setPost({...post, title: event.target.value})}} 
          value={post.title} 
          placeholder="Заголовок поста"/>
        <MyInput 
          onChange={(event) => {setPost({...post, body: event.target.value})}} 
          value={post.body} 
          placeholder="Описание поста"/>
        <MyButton onClick={addNewPost}>Создать</MyButton>
      </form>
    );
};


export default PostForm;