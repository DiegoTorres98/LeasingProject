import logo2 from './imagenes/logo2.png';
import home from './imagenes/home.svg';
import wallet from './imagenes/wallet-alt.svg';
import receipt from './imagenes/receipt.svg';
import user_circle from './imagenes/user-circle.svg';
import './leasing2.css';

function Leasing2() {
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

            <div className='box_leasing1'>
                <div>
                    <h1> Datos de los costes / Gastos iniciales </h1>
                </div>

                <div className='box_leasingbk2'>
                    <div className='lng_costnot'>
                        <p>Costos notariales</p>
                        <input className='inp1' type="text"/>
                    </div>

                    <div className='lng_costregi'>
                        <p>% Costos Registrales</p>
                        <input className='inp2' type="text"/>
                        <select name='opc_frepag'>
                            <option value={'value1'}>PERRO</option>
                            <option value={'value2'}>PERROS</option>
                            <option value={'value3'}>PERRITOS</option>
                        </select>
                    </div>

                    <div className='lng_tasacion'>
                        <p>% Tasación</p>
                        <input className='inp3' type="text"/>
                        <select name='opc_frepag'>
                            <option value={'value1'}>PERRO</option>
                            <option value={'value2'}>PERROS</option>
                            <option value={'value3'}>PERRITOS</option>
                        </select>
                    </div>

                    <div className='lng_comiestudio'>
                        <p>% Comisión de estudio</p>
                        <input className='inp4' type="text"/>
                        <select name='opc_frepag'>
                            <option value={'value1'}>PERRO</option>
                            <option value={'value2'}>PERROS</option>
                            <option value={'value3'}>PERRITOS</option>
                        </select>
                    </div>

                    <div className='lng_comiactiva'>
                        <p>% Comisión de activación </p>
                        <input className='inp5' type="text"/>
                        <select name='opc_frepag'>
                            <option value={'value1'}>PERRO</option>
                            <option value={'value2'}>PERROS</option>
                            <option value={'value3'}>PERRITOS</option>
                        </select>
                    </div>

                    <div className='button_lng'>
                        <button className='lng_button'> Calcular </button>
                    </div>

                </div>
                
                
            </div>

        </div>
    </div>
  );
}

export default Leasing2;
