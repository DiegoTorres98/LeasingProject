import logo from './imagenes/logo.png';
import banconacion from './imagenes/banconacion.png';
import './App.css';

function App() {
  return (
    <div className='body'>
      <div className="principal">
        <div className='login'>
          <div>
            <img src={logo}/> 
          </div>
          <div className='user'>
            <label> Usuario </label> <br></br>
            <input type="text"/>
          </div>
          <div className='password'>
            <label> Contraseña </label> <br></br>
            <input type="password"/>
          </div>

          <h5 style={{marginBottom:0}}> ¿No tienes una cuenta? </h5> 
          
          <h5 style={{marginTop:0}}> 
            <a href='#'>
              Registrate 
            </a>
          </h5>
          

          <button className='button_login'> ENTRAR </button>
        </div>

        <div className="login_image">
          <img src={banconacion}/> 
        </div>

      </div>
    </div>
    
  );
}

export default App;
