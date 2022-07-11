import React from 'react';
import classes from '../styles/PostExactlyStyles.module.css';

const CommentsList = ({comments}) => {
    if (!comments.length) {
        return <h1>Комментариев нет!</h1>
    }

    return (
        <div className={classes.commentsBlock}>
            {comments.map(item => 
                <div key={item.id} className={classes.comment}>
                    <h5 className={classes.commentEmail}>{item.email}</h5>
                    <div className={classes.commentBody}>{item.body}</div>
                </div>
            )}
        </div>
    );
};

export default CommentsList;