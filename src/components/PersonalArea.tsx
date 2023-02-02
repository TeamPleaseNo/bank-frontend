import './../css/PersonalArea.css';
import repository from "../repositories/OrganisationRepository";
import {useEffect, useState} from "react";
import OrgInfo from "../Objects/OrgInfo";
import ServiceInfo from "../Objects/ServiceInfo";

const PersonalArea = () => {
    const [info, setInfo] = useState<OrgInfo>();
    const [list, setList] = useState<ServiceInfo[]>([]);

    useEffect(() => {
            setInfo({
                foundingDate: '20.01.2020',
                genDirector: 'Укер Дукер',
                address: 'г. Сан Франциско, ул. стиля Диско 666',
                orgName: 'ООО Рога и копыта'
            });
            setList([
                {
                    name: 'Белка в колесе',
                    description: 'быстрее света',
                    percent: '5%',
                    minLoanPeriod: '1',
                    maxLoanPeriod: '10',
                    isOnline: true
                },
            ]);
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
                <label className="label_in_header">Личный кабинет (name)</label>
                <div className="line"></div>
            </div>
            <div className="inf">
                <div className="left_inf">
                    <div className="form_l">
                        <h1>Основная информация</h1>
                        {info && <div className="basic_info">
                            <label className="block_label" htmlFor="adress">
                                Адрес
                                <input className="read_info" type="text" id="adress" value={info.address} disabled/>
                            </label>
                            <label className="block_label" htmlFor="number">
                                Телефон
                                <input className="read_info" type="text" id="number" value={info.genDirector} disabled/>
                            </label>
                            <label className="block_label" htmlFor="email">
                                Электронная почта
                                <input className="read_info" type="email" id="email" disabled/>
                            </label>
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
                                        <label>Название</label>
                                        <div className="answer">
                                            <label>{item.name}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="column">
                                        <label>Описание</label>
                                        <textarea disabled className="info_text" value={item.description}/>
                                    </div>
                                </div>
                                <div className="percent">
                                    <div className="column">
                                        <label>Процентная ставка</label>
                                        <div className="answer">
                                            <label>{item.percent}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="choise">
                                    <div className="column">
                                        <label>Возможность онлайн</label>
                                        <div className="answer">
                                            <label>{item.isOnline ? 'да' : 'нет'}</label>
                                        </div>
                                    </div>
                                </div>

                            </div>)}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default PersonalArea;
