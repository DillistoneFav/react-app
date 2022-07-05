import React from 'react';
import Post from './Post';

const PostList = (props) => {

    return (
        <div>
            <h1>{props.title}</h1>
            {props.posts.map((post, index) => 
                <Post number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    );
};

export default PostList;