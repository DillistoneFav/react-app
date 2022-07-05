import React from 'react';
import styles from './myInput.module.css';

const MyInput = (props) => {
    return (
        <input className={styles.MyInput} {...props}></input>
    );
};

export default MyInput;