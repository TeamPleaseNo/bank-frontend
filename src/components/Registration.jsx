import {Link} from 'react-router-dom'
import './../css/Login.css'
import repository from './../repositories/OrganisationRepository.tsx'
import React from 'react';
import RegInfo from './../Objects/RegInfo.tsx';
import { useRef } from 'react';
const moneybox = require('./moneybox.png'); 

const Registration = () => {

    const loginRef = useRef(null)
    const passwordRef = useRef(null)
    const nameRef = useRef(null)
    const addressRef = useRef(null)
    const directorRef = useRef(null)
    const dateRef = useRef(null)

    const handleRegistration = (e) => {
        e.preventDefault();
        const regInfo = {
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
                <h>Регистрация</h>
                <div className="form_input">
                    <label className="block_label" hmtlFor="login">
                        Логин
                        <input ref={loginRef} className="input" type="text" id="login" />
                    </label>
                    <label className="block_label" hmtlFor="password">
                        Пароль
                        <input ref={passwordRef} className="input" type="password" id="password" />
                    </label>
                    <label className="block_label" hmtlFor="password">
                        Повторите пароль
                        <input className="input" type="password" id="password" />
                    </label>
                    <label className="block_label" hmtlFor="name">
                        Название
                        <input ref={nameRef} className="input" type="text" id="name" />
                    </label>
                    <label className="block_label" hmtlFor="address">
                        Адрес
                        <input ref={addressRef} className="input" type="text" id="address" />
                    </label>
                    <label className="block_label" hmtlFor="director">
                        Ген. директор
                        <input ref={directorRef} className="input" type="text" id="director" />
                    </label>
                    <label className="block_label" hmtlFor="foundingDate">
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



