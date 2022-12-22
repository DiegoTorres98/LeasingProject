import logo from './imagenes/logo.png';
import './register.css';

function Register() {
  return (
    <div className="principal">
      <div className="register_logo">
        <div>
          <img style={{marginRight:"35px"}} src={logo}/> 
        </div>
      </div>

      <div className="register_write">
        <div className='user_name'>
          <label> Nombre de Usuario </label> <br></br>
          <input type="text"/>
        </div>

        <div className='email'>
          <label> Correo Electronico </label> <br></br>
          <input type="text"/>
        </div>

        <div className='c_password'>
          <label> Crea tu Contraseña </label> <br></br>
          <input type="password"/>
        </div>

        <div className='c_password'>
          <label> Ingresa tu RUC </label> <br></br>
          <input type="text"/>
        </div>

        <button  className='button_register'> REGÍSTRATE </button>

      </div>
    </div>
  );
}

export default Register;