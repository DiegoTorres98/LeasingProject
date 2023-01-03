import logo2 from './imagenes/logo2.png';
import home from './imagenes/home.svg';
import wallet from './imagenes/wallet-alt.svg';
import receipt from './imagenes/receipt.svg';
import user_circle from './imagenes/user-circle.svg';
import vector2 from './imagenes/Vector2.png';
import './calcular2.css';

function Calcular2() {
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
                <div className='tittle_bl'>
                    <img className='imagenflecha2' style={{marginRight:"0px"}} src={vector2}/>
                    <div className='resultados'>
                        <p> RESULTADOS </p>
                    </div>
                    
                </div>

                <div className='indicaRenta'>
                    <p> Indicadores de Rentabilidad </p>
                </div>

                <div className='box_leasingcal1'> 
                    <div className='cal_TCEAFB'>
                        <p>TCEA Flujo Bruto</p>
                        <input type="text"/>
                    </div>
                    
                    <div className='cal_TCEAFN'>
                        <p>TCEA Flujo Neto  </p>
                        <input type="text"/>
                    </div>
                    
                    <div className='cal_TREAFB'>
                        <p>TREA Flujo Bruto</p>
                        <input type="text"/>
                    </div>
                    
                    <div className='cal_TREAFN'>
                        <p>TREA Flujo Neto</p>
                        <input type="text"/>
                    </div>
                    
                    <div className='cal_seguriesgo'>
                        <p>Seguro Contra todo Riesgo</p>
                        <input type="text"/>
                    </div>

                    <div className='cal_comiperiodica'>
                        <p>Comisiones Periódicas </p>
                        <input type="text"/>
                    </div>

                    <div className='cal_recompra'>
                        <p>Recompra </p>
                        <input type="text"/>
                    </div>

                    <div className='cal_reembolsototal'>
                        <p>Reembolso Total</p>
                        <input type="text"/>
                    </div>

                    

                </div>
                
                
            </div>

        </div>
    </div>
  );
}

export default Calcular2;