import './../css/Login.css';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router';
import { SyntheticEvent, useRef, useState } from 'react';
import React from 'react';
import moneybox from './moneybox.png';
import LoginInfo from '../Objects/LoginInfo';
import repository from '../repositories/OrganisationRepository';

const Login = () => {
    const loginRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const [loginFail, setLoginFail] = useState(false)

    const navigate = useNavigate()

    const handleLogin = (e: SyntheticEvent) => {
        e.preventDefault()
        const logInfo: LoginInfo = {
            login: loginRef.current?.value ?? "",
            password: passwordRef.current?.value ?? ""
        }

        repository.login(logInfo)
            .then(response => {
                if (localStorage.getItem('statusCode') === '200') {
                    setLoginFail(false)
                    navigate('personalPage')
                }
                else {
                    setLoginFail(true)
                }
            })
            .catch(error => {console.log(error); setLoginFail(true);})
    }

    return (
        <div className='LoginContainer'>
            <img className="icon_moneybox" src={moneybox} alt="Moneybox" width="5%"/>
            <h1>Вход</h1>
            <form className="form" autoComplete='off'>
                <div className="form_input">
                    <label className="block_label" htmlFor='login'>
                        Логин
                        <input ref={loginRef} className="input" type="text" id="login"/>
                    </label>
                    <label className="block_label" htmlFor="password">
                        Пароль
                        <input ref={passwordRef} className="input" type="password" id="password"/>
                    </label>
                    <button onClick={handleLogin} className="block_label button_login">Войти</button>
                    {
                        (loginFail) && <span className='login-error'>Неправильный логин или пароль</span>
                    }
                    <Link to="registration" className="ref">Ещё нет аккаунта?</Link>
                </div>
            </form>
        </div>
     );
}

export default Login;
