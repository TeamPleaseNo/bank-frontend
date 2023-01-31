import './../css/Login.css';
import {Link} from 'react-router-dom';
import { useRef } from 'react';
import React from 'react';
import moneybox from './moneybox.png';
import LoginInfo from '../Objects/LoginInfo';
import repository from '../repositories/OrganisationRepository';

const Login = () => {
    const loginRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const handleLogin = (e) => {
        e.preventDefault()
        const logInfo: LoginInfo = {
            login: loginRef.current?.value ?? "",
            password: passwordRef.current?.value ?? ""
        }
        console.log(logInfo)
        repository.login(logInfo)
    }

    return ( 
        <div className='LoginContainer'>
            <img className="icon_moneybox" src={moneybox} alt="Moneybox" width="5%"/>
            <form className="form" autoComplete='off'>
                <h1>Вход</h1>
                <div className="form_input">
                    <label className="block_label" htmlFor='login'>
                        Логин
                        <input ref={loginRef} className="input" type="text" id="login"/>
                    </label>
                    <label className="block_label" htmlFor="password">
                        Пароль
                        <input ref={passwordRef} className="input" type="password" id="password"/>
                    </label>
                    <Link to="registration" className="ref_reg">Ещё нет аккаунта?</Link>
                </div>            
            </form>
            <button onClick={handleLogin}>Войти</button>
        </div>
     );
}
 
export default Login;