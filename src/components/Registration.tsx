import {Link, useNavigate} from 'react-router-dom';
import './../css/Registration.css';
import repository from './../repositories/OrganisationRepository';
// @ts-ignore
import DatePicker from 'react-datepicker';
import RegInfo from './../Objects/RegInfo';
import React, { useRef, useState } from 'react';
import moneybox from './moneybox.png';
// @ts-ignore
import { registerLocale } from  "react-datepicker";
import ru from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";

registerLocale('ru', ru)

const Registration = () => {

    const [startDate, setStartDate] = useState(new Date())
    const [emptyFields, setEmptyFields] = useState(false)
    const [passDontMatch, setPassDontMatch] = useState(false)

    const navigate = useNavigate()


    const loginRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const repPasswordRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const addressRef = useRef<HTMLInputElement>(null)
    const directorRef = useRef<HTMLInputElement>(null)
    const dateRef = useRef<HTMLInputElement>(null)

    const checkForm = () => {
        if (passwordRef.current?.value === "" ||
            passwordRef.current?.value === "" ||
            nameRef.current?.value === "" ||
            addressRef.current?.value === "" ||
            directorRef.current?.value === "" ||
            startDate.toJSON() === ""
        )
                setEmptyFields(true)
        else
            setEmptyFields(false)
        if (passwordRef.current?.value !== repPasswordRef.current?.value)
            setPassDontMatch(true)
        else
            setPassDontMatch(false)
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        const regInfo: RegInfo = {
            login: loginRef.current?.value ?? "",
            password: passwordRef.current?.value ?? "",
            orgName: nameRef.current?.value ?? "",
            legalAddress: addressRef.current?.value ?? "",
            genDirector: directorRef.current?.value ?? "",
            foundingDate: startDate.toJSON() ?? "",
        }

        console.log(emptyFields, passDontMatch)
        checkForm()
        repository.registration(regInfo)
            .then(response => {
                if (!emptyFields && !passDontMatch && localStorage.getItem('statusCode') === '200') {
                    navigate('../personalPage')
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='RegContainer'>
            <img className="icon_moneybox" src={moneybox} alt="Moneybox" width="5%" />
            <h1>??????????????????????</h1>
            <div className="form">
                <div className="form_input">
                    <label className="block_label" htmlFor="login">
                        ??????????
                        <input ref={loginRef} className="input" type="text" id="login" />
                    </label>
                    <label className="block_label" htmlFor="password">
                        ????????????
                        <input ref={passwordRef} className="input" type="password" id="password" />
                    </label>
                    <label className="block_label" htmlFor="password">
                        ?????????????????? ????????????
                        <input ref={repPasswordRef} className="input" type="password" id="password" />
                    </label>
                    <label className="block_label" htmlFor="name">
                        ????????????????
                        <input ref={nameRef} className="input" type="text" id="name" />
                    </label>
                    <label className="block_label" htmlFor="address">
                        ??????????
                        <input ref={addressRef} className="input" type="text" id="address" />
                    </label>
                    <label className="block_label" htmlFor="director">
                        ??????. ????????????????
                        <input ref={directorRef} className="input" type="text" id="director" />
                    </label>
                    <label className="block_label" htmlFor="foundingDate">
                        ???????? ??????????????????
                        <DatePicker locale="ru" selected={startDate} onChange={(date => {setStartDate(date)})} ref={dateRef} id="foundingDate" />
                    </label>
                    <button onClick={handleRegistration} className="block_label button_reg">????????????????????????????????????</button>
                    { (passDontMatch) && <span className='reg-error'>???????????? ???? ??????????????????!</span> }
                    { (emptyFields) && <span className='reg-error'>?????????????????? ?????? ????????</span>}
                    <Link to="/" className="ref">?????? ???????? ???????????????</Link>
                </div>
            </div>
        </div>
     );
}

export default Registration;



