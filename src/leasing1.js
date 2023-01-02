import logo2 from './imagenes/logo2.png';
import home from './imagenes/home.svg';
import wallet from './imagenes/wallet-alt.svg';
import receipt from './imagenes/receipt.svg';
import user_circle from './imagenes/user-circle.svg';
import './leasing1.css';

function Leasing1() {
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
                    <h1> Datos del préstamo </h1>
                </div>

                <div className='box_leasingbk'> 
                    <div className='lng_precio'>
                        <p>Precio de venta del activo</p>
                        <input type="text"/>
                    </div>

                    <div className='lng_anhos'>
                        <p>N° de años</p>
                        <input type="text"/>
                    </div>

                    <div className='lng_frepag'>
                        <p>Frecuencia de pago</p>
                        <select name='opc_frepag'>
                            <option value={'value1'}>PERRO</option>
                            <option value={'value2'}>PERROS</option>
                            <option value={'value3'}>PERRITOS</option>
                        </select>
                    </div>

                    <div className='lng_dianhos'>
                        <p>Dias por año</p>
                        <select name='opc_dianhos'>
                            <option value={'value1'}>HOLA</option>
                            <option value={'value2'}>HOLAS</option>
                            <option value={'value3'}>HOLITAS</option>
                        </select>
                    </div>
                    
                    <div className='lng_TEA'>
                        <p>% TEA</p>
                        <input type="text"/>
                    </div>
                    
                    <div className='lng_IGV'>
                        <p>% de IGV</p>
                        <input type="text"/>
                    </div>
                    
                    <div className='lng_IR'>
                        <p>% de impuesto a la renta</p>
                        <input type="text"/>
                    </div>
                    
                    <div className='lng_recompra'>
                        <p>% de recompra</p>
                        <input type="text"/>
                    </div>

                    <div className='button_lng'>
                        <button className='lng_button'> Siguiente </button>
                    </div>

                </div>
                
                
            </div>

        </div>
    </div>
  );
}

export default Leasing1;
