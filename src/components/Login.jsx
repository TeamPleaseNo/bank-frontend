import './../css/Login.css';
import {Link} from 'react-router-dom';
const moneybox = require('./moneybox.png');

const Login = () => {
    return ( 
        <div className='LoginContainer'>
            <img className="icon_moneybox" src={moneybox} alt="Moneybox" width="5%"/>
            <form className="form" autoComplete='off'>
                <h>Вход</h>
                <div className="form_input">
                    <label className="block_label" for="login">
                        Логин
                        <input className="input" type="text" id="login"/>
                    </label>
                    <label className="block_label" htmlFor="password">
                        Пароль
                        <input className="input" type="password" id="password"/>
                    </label>
                    <Link to="registration" className="ref_reg">Ещё нет аккаунта?</Link>
                </div>
            </form>
        </div>
     );
}
 
export default Login;