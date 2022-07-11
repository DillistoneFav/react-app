import React from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import classes from '../styles/Authorization.module.css';

import { useContext,useState } from 'react';
import { AuthContext} from '../components/context';

const Authorization = () => {

    const {setIsAuth, setLoggedName} = useContext(AuthContext)
    const [inputValue, setInputValue] = useState('');

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
        setLoggedName(inputValue);
    }
    return (
        <div className={classes.authPage}>
            <h1>Авторизация</h1>
            <form className={classes.authForm} onSubmit={login}>
                <MyInput value={inputValue} onChange={(event) => setInputValue(event.target.value)} type="text" placeholder="Введите логин"></MyInput>
                <MyInput type="password" placeholder="Введите пароль"></MyInput>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Authorization;