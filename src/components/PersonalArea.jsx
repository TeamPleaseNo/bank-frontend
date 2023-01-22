import './../css/PersonalArea.css';
import {Link} from "react-router-dom";

const PersonalArea = () => {
    return (
        <div>
            <div className="header">
                <label className="label_in_header">Личный кабинет (name)</label>
                <div className="line"></div>
            </div>
            <div className="inf">
                <div className="left_inf">
                    <div className="form_l">
                        <h>Основная информация</h>
                        <div className="basic_info">
                            <label className="block_label" htmlFor="adress">
                                Адрес
                                <input className="read_info" type="text" id="adress" readOnly="readonly"/>
                            </label>
                            <label className="block_label" htmlFor="number">
                                Телефон
                                <input className="read_info" type="text" id="number" readOnly="readonly"/>
                            </label>
                            <label className="block_label" htmlFor="email">
                                Электронная почта
                                <input className="read_info" type="email" id="email" readOnly="readonly"/>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="right_inf">
                    <h>Информация об основных займах</h>
                    <div className="loans">
                        <div className="form_r">
                            <div className="loan">
                                <div className="name">
                                    <div className="column">
                                        <label>Название</label>
                                        <div className="answer">
                                            <label>Если длинное название то норм</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="column">
                                        <label>Описание</label>
                                        <textarea readOnly="readonly" className="info_text"></textarea>
                                    </div>
                                </div>
                                <div className="percent">
                                    <div className="column">
                                        <label>Процентная ставка</label>
                                        <div className="answer">
                                            <label>10%</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="choise">
                                    <div className="column">
                                        <label>Возможность онлайн</label>
                                        <div className="answer">
                                            <label>да</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="form_r">
                            <div className="loan">
                                <div className="name">
                                    <div className="column">
                                        <label>Название</label>
                                        <div className="answer">
                                            <label>Если длинное название то норм</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="column">
                                        <label>Описание</label>
                                        <textarea readOnly="readonly" className="info_text"></textarea>
                                    </div>
                                </div>
                                <div className="percent">
                                    <div className="column">
                                        <label>Процентная ставка</label>
                                        <div className="answer">
                                            <label>10%</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="choise">
                                    <div className="column">
                                        <label>Возможность онлайн</label>
                                        <div className="answer">
                                            <label>да</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="form_r">
                            <div className="loan">
                                <div className="name">
                                    <div className="column">
                                        <label>Название</label>
                                        <div className="answer">
                                            <label>Если длинное название то норм</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="column">
                                        <label>Описание</label>
                                        <textarea readOnly="readonly" className="info_text"></textarea>
                                    </div>
                                </div>
                                <div className="percent">
                                    <div className="column">
                                        <label>Процентная ставка</label>
                                        <div className="answer">
                                            <label>10%</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="choise">
                                    <div className="column">
                                        <label>Возможность онлайн</label>
                                        <div className="answer">
                                            <label>да</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="form_r">
                            <div className="loan">
                                <div className="name">
                                    <div className="column">
                                        <label>Название</label>
                                        <div className="answer">
                                            <label>Если длинное название то норм</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="column">
                                        <label>Описание</label>
                                        <textarea readOnly="readonly" className="info_text"></textarea>
                                    </div>
                                </div>
                                <div className="percent">
                                    <div className="column">
                                        <label>Процентная ставка</label>
                                        <div className="answer">
                                            <label>10%</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="choise">
                                    <div className="column">
                                        <label>Возможность онлайн</label>
                                        <div className="answer">
                                            <label>да</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="form_r">
                            <div className="loan">
                                <div className="name">
                                    <div className="column">
                                        <label>Название</label>
                                        <div className="answer">
                                            <label>Если длинное название то норм</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="column">
                                        <label>Описание</label>
                                        <textarea readOnly="readonly" className="info_text"></textarea>
                                    </div>
                                </div>
                                <div className="percent">
                                    <div className="column">
                                        <label>Процентная ставка</label>
                                        <div className="answer">
                                            <label>10%</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="choise">
                                    <div className="column">
                                        <label>Возможность онлайн</label>
                                        <div className="answer">
                                            <label>да</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="form_r">
                            <div className="loan">
                                <div className="name">
                                    <div className="column">
                                        <label>Название</label>
                                        <div className="answer">
                                            <label>Если длинное название то норм</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="info">
                                    <div className="column">
                                        <label>Описание</label>
                                        <textarea readOnly="readonly" className="info_text"></textarea>
                                    </div>
                                </div>
                                <div className="percent">
                                    <div className="column">
                                        <label>Процентная ставка</label>
                                        <div className="answer">
                                            <label>10%</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="choise">
                                    <div className="column">
                                        <label>Возможность онлайн</label>
                                        <div className="answer">
                                            <label>да</label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default PersonalArea;
