import {Link} from 'react-router-dom'
import './../css/Login.css'
import './../repositories/OrganisationRepository'
import repository from './../repositories/OrganisationRepository';
import RegInfo from '../Objects/RegInfo';
const moneybox = require('./moneybox.png'); 

const Registration = () => {

    const handleRegistration = () => {
        const regInfo = {
            
        }
    }
    return ( 
        <form className='LoginContainer'>
            <img class="icon_moneybox" src={moneybox} alt="Moneybox" width="5%" />
            <div class="form">
                <h>Регистрация</h>
                <div class="form_input">
                    <label class="block_label" for="login">
                        Логин
                        <input class="input" type="text" id="login" />
                    </label>
                    <label class="block_label" for="password">
                        Пароль
                        <input class="input" type="password" id="password" />
                    </label>
                    <label class="block_label" for="password">
                        Повторите пароль
                        <input class="input" type="password" id="password" />
                    </label>
                    <Link to="/" class="ref_reg">Уже есть аккаунт?</Link>
                </div>
            </div>
            <button onClick={handleRegistration}>Зарегистрироваться</button>
        </form>
     );
}
 
export default Registration;



