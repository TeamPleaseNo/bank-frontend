import {Link} from 'react-router-dom';
import './../css/Registration.css';
import repository from './../repositories/OrganisationRepository';
import DatePicker from 'react-datepicker';
import RegInfo from './../Objects/RegInfo';
import React, { useRef, useState } from 'react';
import moneybox from './moneybox.png';
import { registerLocale } from  "react-datepicker";
import ru from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";

registerLocale('ru', ru)

const Registration = () => {

    const [startDate, setStartDate] = useState(new Date())


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
            legalAddress: addressRef.current?.value ?? "",
            genDirector: directorRef.current?.value ?? "",
            foundingDate: startDate.toJSON(),            
        }
        console.log(regInfo)
        repository.registration(regInfo)
            .then((response => console.log(response)))
            .catch(error => console.log(error))
    }
    return (
        <div className='RegContainer'>
            <img className="icon_moneybox" src={moneybox} alt="Moneybox" width="5%" />
            <h1>Регистрация</h1>
            <div className="form">
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
                        <DatePicker locale="ru" selected={startDate} onChange={(date => {setStartDate(date)})} ref={dateRef} id="foundingDate" />
                    </label>
                    <button onClick={handleRegistration} className="block_label button_reg">Зарегистрироваться</button>
                    <Link to="/" className="ref">Уже есть аккаунт?</Link>
                </div>
            </div>
        </div>
     );
}

export default Registration;



