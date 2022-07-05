import React from 'react';
import styles from './myButton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <button className={styles.myButton} {...props}>{children}</button>
    );
};

export default MyButton;