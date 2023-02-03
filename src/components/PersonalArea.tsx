import './../css/PersonalArea.css';
import repository from "../repositories/OrganisationRepository";
import {useEffect, useState, useRef} from "react";
import { useNavigate } from 'react-router-dom';
import OrgInfo from "../Objects/OrgInfo";
import ru from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, {registerLocale} from 'react-datepicker';
import gotServiceInfo from '../Objects/gotServiceInfo';

registerLocale('ru', ru)

const PersonalArea = () => {
    const navigate = useNavigate()

    const [info, setInfo] = useState<OrgInfo>();
    const [list, setList] = useState<gotServiceInfo[]>([]);
    const [startDate, setStartDate] = useState(new Date())
    const [dataChanged, setDataChanged] = useState(false)

    const addressRef = useRef<HTMLInputElement>(null)
    const directorRef = useRef<HTMLInputElement>(null)

    const trimDate = (date: String) => {
        let index = date.indexOf('T')
        let res = date.substring(0, index)
        return res
    }

    const changeOrgInfo = () => {
        const updatedInfo: OrgInfo = {
            orgName: info?.orgName,
            legalAddress: addressRef.current?.value ?? "",
            genDirector: directorRef.current?.value ?? "",
            foundingDate: startDate.toJSON()
        }
        repository.refreshToken().then(() => {
            repository.changePersonalData(updatedInfo)
                .then((res) => {
                    setDataChanged(false)
                    console.log(res.isSuccess, res.error)
                })
        })
    }

    const deleteLoan = (id) => {
        console.log(id)
        repository.refreshToken().then(() => {
            repository.removeService(id)
                .then(() => repository.getServices().then((data) => {
                    if (data) setList(data);
                }))
        })
    }

    const addLoan = () => {
        navigate('../add')
    }

    useEffect(() => {
        repository.refreshToken()
            .then(_ => console.log(repository.getPersonalData().then(res => res)) )

            const dataFetch = () => {
                repository.getPersonalData().then((data) => {
                    if (data) setInfo(data);
                })
            };

            const servicesFetch = () => {
                repository.getServices().then((data) => {
                    if (data) setList(data);
                })
            };

            repository.refreshToken().then(() => {
                dataFetch();
                servicesFetch();
            })
        }, []
    )
    ;

    return (
        <div>
            <div className="header">
                <label className="label_in_header">Личный кабинет {info?.orgName}</label>
                <div className="line"></div>
            </div>
            <div className="inf">
                <div className="left_inf">
                    <div className="form_l">
                        <h1>Основная информация</h1>
                        {info && <div className="basic_info">
                            <label className="block_label" htmlFor="adress">
                                Адрес
                                <input ref={addressRef} onChange= {
                                        (val) => {setDataChanged(true); setInfo({...info, legalAddress: val.target.value})}
                                    }
                                    className="read_info" type="text" id="adress" value={info.legalAddress} />
                            </label>
                            <label className="block_label" htmlFor="number">
                                Директор
                                <input ref={directorRef} onChange= {
                                        (val) => {setDataChanged(true); setInfo({...info, genDirector: val.target.value})}
                                    }
                                    className="read_info" type="text" id="number" value={info.genDirector} />
                            </label>
                            <label className="block_label" htmlFor="email">
                                Дата основания
                                <DatePicker locale='ru' selected={startDate} onChange= {
                                    (date) => {setStartDate(date); setDataChanged(true); setInfo({...info, foundingDate: date.toJSON()})}
                                }
                                 className="read_info" type="email" id="email" value={trimDate(info.foundingDate)} />
                            </label>
                            { (dataChanged) && <button className="button_update" onClick={changeOrgInfo}>Сохранить изменения</button> }
                        </div>}
                    </div>
                </div>
                <div className="right_inf">
                    <h1>Информация об основных займах</h1>
                    <div className="loans">
                        <div className="form_r">
                            {list.map((item, i) => <div key={i} className="loan">
                                <div className="name">
                                    <div className="column">
                                        <label className="name_label">Название</label>
                                        <div className="d"></div>
                                        <div className="answer">
                                            <label>{item.name}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="column">
                                        <label className="desc_label">Описание</label>
                                        <div className="d"></div>
                                        <textarea disabled className="info_text" value={item.description}/>
                                    </div>
                                </div>
                                <div className="percent">
                                    <div className="column">
                                        <label className="other_info_label">Процентная ставка</label>
                                        <div className="d"></div>
                                        <div className="answer">
                                            <label>{item.percent}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="choise">
                                    <div className="column">
                                        <label className="other_info_label">Возможность онлайн</label>
                                        <div className="d"></div>
                                        <div className="answer">
                                            <label>{item.isOnline ? 'да' : 'нет'}</label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button className="button_delete" onClick={() => deleteLoan(item.id)}>Удалить</button>
                                </div>
                                <div className="line_under_loan"></div>
                            </div>)}
                        </div>
                    </div>
                    <button className="button_add" onClick={() => addLoan()}>Добавить</button>
                </div>

            </div>

        </div>
    );
}

export default PersonalArea;
