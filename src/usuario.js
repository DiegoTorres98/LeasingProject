import logo2 from './imagenes/logo2.png';
import home from './imagenes/home.svg';
import wallet from './imagenes/wallet-alt.svg';
import receipt from './imagenes/receipt.svg';
import user_circle from './imagenes/user-circle.svg';
import perfilusuario from './imagenes/perfilusuario.png';
import './usuario.css';

function Usuario() {
  return (
    <div className="principal_muro">
        <div className='side_bar'>
            <div className='logoD'>
                <img src={logo2}/> 
            </div>

            <div className='inicio'>
                <img style={{marginRight:"10px"}} src={home}/> 
                <p> Inicio </p>
            </div>

            <div className='leasing'>
                <img style={{marginRight:"10px"}} src={wallet}/>
                <p> Leasing </p> 
            </div>

            <div className='historial'>
                <img style={{marginRight:"10px"}} src={receipt}/>
                <p> Historial </p> 
            </div>

            <div className='config'>
                <div className='border'></div>

                <p className='ayuda'> Ayuda </p>
                <p className='configuracion'> Configuración </p>
                <p className='cerrar_sesion'> Cerrar Sesión </p> 
            </div>

        </div>

        <div className='welcome-config'>
            <div className='header1'>
                <div className='bienvenidos'>
                    <p className='bienvenido'> BIENVENIDO </p>
                </div>

                <div className='user_together'>
                    <img style={{marginRight:"0px"}} src={user_circle}/> 
                    <p className='usuario'> USUARIO </p>
                </div>

            </div>

            <div className='box_usuario'>
                <div>
                    <img style={{marginRight:"0px"}} src={perfilusuario}/> 
                </div>

                <div>
                    <h3> Nombre de usuario: </h3>
                    <p> FirmFin</p>
                    <button> Editar </button>
                </div>

                <div>
                    <h3> Correo: </h3>
                    <p> FirmFin_1@gmail.com </p>
                    <button> Editar </button>
                </div>

                <div>
                    <h3> RUC: </h3>
                    <p> 10293847569</p>
                    <button> Editar </button>
                </div>

                <div>
                    <button> Volver al menu principal </button>
                </div>
            </div>

        </div>
    </div>
  );
}

export default Usuario;
