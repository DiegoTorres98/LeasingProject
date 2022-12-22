import logo2 from './imagenes/logo2.png';
import home from './imagenes/home.svg';
import wallet from './imagenes/wallet-alt.svg';
import receipt from './imagenes/receipt.svg';
import clip from './imagenes/clip.png';
import user_circle from './imagenes/user-circle.svg';
import './historial.css';

function Historial() {
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

        <div className='welcome'>
            <div className='header1'>
                <div className='bienvenidos'>
                    <p className='bienvenido'> BIENVENIDO </p>
                </div>

                <div className='user_together'>
                    <img style={{marginRight:"0px"}} src={user_circle}/> 
                    <p className='usuario'> USUARIO </p>
                </div>

            </div>

            <div className='header2'>
                <div className='header2_names'>
                    <p> Nombre del  <br></br>  Leasing </p>
                    <p> Monto del <br></br>  Leasing </p>
                    <p> Mas detalles </p>

                </div>

                <div className='lng1'>
                    <p> Leasing #1 </p>
                    <p> 25000 </p>
                    <a href='#'> Mas detalles </a>
                </div>

                <div className='lng2'>
                    <p> Leasing #2 </p>
                    <p> 30000 </p>
                    <a href='#'> Mas detalles </a>
                </div>

                <div className='lng3'>
                    <p> Leasing #3 </p>
                    <p> 20000 </p>
                    <a href='#'> Mas detalles </a>
                </div>

                <div className='lng4'>
                    <p> Leasing #4 </p>
                    <p> 15000 </p>
                    <a href='#'> Mas detalles </a>
                </div>

                <div className='lng5'>
                    <p> Leasing #5 </p>
                    <p> 10000 </p>
                    <a href='#'> Mas detalles </a>
                </div>

                <div className='lng6'>
                    <p> Leasing #6 </p>
                    <p> 35000 </p>
                    <a href='#'> Mas detalles </a>
                </div>

                <div className='lng7'>
                    <p> Leasing #7 </p>
                    <p> 15000 </p>
                    <a href='#'> Mas detalles </a>
                </div>

                <div className='lng8'>
                    <p> Leasing #8 </p>
                    <p> 20000 </p>
                    <a href='#'> Mas detalles </a>
                </div>

            </div>
        </div>
    </div>
  );
}

export default Historial;
