import './../css/AddMicroloan.css';
import {useNavigate} from 'react-router-dom';
import { useState, useRef } from 'react';
import ServiceInfo from '../Objects/ServiceInfo';
import repository from '../repositories/OrganisationRepository';
const moneybox = require('./moneybox.png');

const AddMicroloan = () => {
    const navigate = useNavigate()

    const [isOnline, setIsOnline] = useState(false)

    const nameRef = useRef<HTMLInputElement>(null)
    const descRef = useRef<HTMLTextAreaElement>(null)
    const percentRef = useRef<HTMLInputElement>(null)
    const minRef = useRef<HTMLInputElement>(null)
    const maxRef = useRef<HTMLInputElement>(null)

    const addLoan = (e) => {
        e.preventDefault()
        const newLoan: ServiceInfo = {
            serviceName: nameRef.current?.value ?? "",
            description: descRef.current?.value ?? "",
            percent: percentRef.current?.value ?? "",
            minLoanPeriod: minRef.current?.value ?? "",
            maxLoanPeriod: maxRef.current?.value ?? "",
            isOnline: isOnline
        }
        console.log(newLoan)
        repository.refreshToken().then(() => {
            repository.addService(newLoan)
                .then(() => navigate('../personalPage'))
        })
    }

    return (
        <div className='AddContainer'>
            <img className="icon_moneybox" src={moneybox} alt="Moneybox" width="5%"/>
            <form className="form" autoComplete='off'>
                <h1>Добавить микрозайм</h1>
                <div className="form_input">
                    <label className="block_label" htmlFor="name">
                        Название
                        <input ref={nameRef} className="input" type="text" id="name"/>
                    </label>
                    <label className="block_label" htmlFor="info">
                        Описание
                        <textarea ref={descRef} className="input_textarea" id="info"/>
                    </label>
                    <label className="block_label" htmlFor="percent">
                        Процентная ставка
                        <input ref={percentRef} className="input" type="number" id="percent"/>
                    </label>
                    <label className="block_label" htmlFor="min">
                        Минимальный срок
                        <input ref={minRef} className="input" type="text" id="min"/>
                    </label>
                    <label className="block_label" htmlFor="max">
                        Максимальный срок
                        <input ref={maxRef} className="input" type="text" id="max"/>
                    </label>
                    <div className="checkbox block_label">
                        <div>
                            <input checked={isOnline} onChange={val => setIsOnline(val.target.checked)} type="checkbox" name="searchMentor"/>
                            <label htmlFor="search_mentor">Возможность оформления онлайн</label>
                        </div>
                    </div>
                    <button className='button_save' onClick={addLoan}>Добавить</button>
                </div>                
            </form>
        </div>
    );
}

export default AddMicroloan;
