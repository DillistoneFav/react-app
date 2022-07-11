/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../components/hooks/useFetching';
import PostService from '../components/API/PostService';
import Loader from '../components/UI/loader/loader';
import { useState } from 'react';
import classes from '../styles/PostExactlyStyles.module.css';
import CommentsList from '../components/CommentsList'

const PostIDPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostByID, isLoading] = useFetching( async () => {
        const response = await PostService.getByID(params.id);
        setPost(response.data);
    });
    const [fetchComments, isCommentsLoading] = useFetching( async () => {
        const response = await PostService.getCommentsByPostID(params.id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostByID(params.id);
        fetchComments(params.id);
    }, []);

    return (
        <div  className={classes.postComments}>
            <h1>Вы открыли страницу поста c ID = {params.id}</h1>
            {isLoading 
                ?   <Loader/>
                :   <div>
                        <h2>{post.title}</h2>
                        <div>{post.body}</div>
                    </div>
            }

            <h1>
                Комментарии
            </h1>
            {isCommentsLoading
                ?   <Loader/>
                :   <CommentsList comments={comments}/>
            }
        </div>
    );
};

export default PostIDPage;