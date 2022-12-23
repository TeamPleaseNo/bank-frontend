import './../Login.css';
const moneybox = require('./moneybox.png');

const Login = () => {
    return ( 
        <div className='LoginContainer'>
            <img className="icon_moneybox" src={moneybox} alt="Moneybox" width="5%"/>
            <div className="form">
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
                    <a className="ref_reg">Ещё нет аккаунта?</a>
                </div>
            </div>
        </div>
     );
}
 
export default Login;