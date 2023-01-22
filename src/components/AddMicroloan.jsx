import './../css/AddMicroloan.css';
import {Link} from 'react-router-dom';
const moneybox = require('./moneybox.png');

const AddMicroloan = () => {
    return (
        <div className='AddContainer'>
            <img className="icon_moneybox" src={moneybox} alt="Moneybox" width="5%"/>
            <form className="form" autoComplete='off'>
                <h>Добавить микрозайм</h>
                <div className="form_input">
                    <label className="block_label" for="name">
                        Название организации
                        <input className="input" type="text" id="name"/>
                    </label>
                    <label className="block_label" htmlFor="info">
                        Описание
                        <textarea className="input_textarea" type="text" id="info"/>
                    </label>
                    <label className="block_label" htmlFor="percent">
                        Процентная ставка
                        <input className="input" type="text" id="percent"/>
                    </label>
                    <div className="checkbox block_label">
                        <div>
                            <input type="checkbox" name="searchMentor"/>
                            <label htmlFor="search_mentor">Возможность оформления онлайн</label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddMicroloan;
