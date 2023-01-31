import {Link} from 'react-router-dom'
import './../css/Login.css'
import repository from './../repositories/OrganisationRepository';
import RegInfo from './../Objects/RegInfo';
import React, { useRef } from 'react';
import moneybox from './moneybox.png'; 

const Registration = () => {

    const loginRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const addressRef = useRef<HTMLInputElement>(null)
    const directorRef = useRef<HTMLInputElement>(null)
    const dateRef = useRef<HTMLInputElement>(null)

    const handleRegistration = (e) => {
        e.preventDefault();
        const regInfo: RegInfo = {
            login: loginRef.current?.value ?? "",
            password: passwordRef.current?.value ?? "",
            orgName: nameRef.current?.value ?? "",
            address: addressRef.current?.value ?? "",
            genDirector: directorRef.current?.value ?? "",
            foundingDate: dateRef.current?.value ?? "",

        }
        console.log(regInfo)
        repository.registration(regInfo);
    }
    return ( 
        <div className='LoginContainer'>
            <img className="icon_moneybox" src={moneybox} alt="Moneybox" width="5%" />
            <div className="form">
                <h1>Регистрация</h1>
                <div className="form_input">
                    <label className="block_label" htmlFor="login">
                        Логин
                        <input ref={loginRef} className="input" type="text" id="login" />
                    </label>
                    <label className="block_label" htmlFor="password">
                        Пароль
                        <input ref={passwordRef} className="input" type="password" id="password" />
                    </label>
                    <label className="block_label" htmlFor="password">
                        Повторите пароль
                        <input className="input" type="password" id="password" />
                    </label>
                    <label className="block_label" htmlFor="name">
                        Название
                        <input ref={nameRef} className="input" type="text" id="name" />
                    </label>
                    <label className="block_label" htmlFor="address">
                        Адрес
                        <input ref={addressRef} className="input" type="text" id="address" />
                    </label>
                    <label className="block_label" htmlFor="director">
                        Ген. директор
                        <input ref={directorRef} className="input" type="text" id="director" />
                    </label>
                    <label className="block_label" htmlFor="foundingDate">
                        Дата основания
                        <input ref={dateRef} className="input" type="text" id="foundingDate" />
                    </label>
                    <Link to="/" className="ref_reg">Уже есть аккаунт?</Link>
                </div>
            </div>
            <button onClick={handleRegistration}>Зарегистрироваться</button>
        </div>
     );
}
 
export default Registration;



