import logo2 from './imagenes/logo2.png';
import home from './imagenes/home.svg';
import wallet from './imagenes/wallet-alt.svg';
import receipt from './imagenes/receipt.svg';
import user_circle from './imagenes/user-circle.svg';
import vector from './imagenes/Vector.png';
import './calcular1.css';

function Calcular1() {
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

            <div className='box_leasingcal1'>
                <div className='tittle_bl'>
                    <div className='resultados'>
                        <p> RESULTADOS </p>
                    </div>
                    <img className='imagenflecha' style={{marginRight:"0px"}} src={vector}/>
                </div>

                <div className='arrendamiento'>
                    <p> Arrendamiento </p>
                </div>

                <div className='box_leasingcal1'> 
                    <div className='cal_IGV'>
                        <p>IGV</p>
                        <input type="text"/>
                    </div>
                    
                    <div className='cal_valorVentaA '>
                        <p>Valor Venta de Activo</p>
                        <input type="text"/>
                    </div>
                    
                    <div className='cal_montlea'>
                        <p>Monto del Leasing</p>
                        <input type="text"/>
                    </div>
                    
                    <div className='cal_TEP'>
                        <p>% de TEP</p>
                        <input type="text"/>
                    </div>
                    
                    <div className='cal_cuotasAnho'>
                        <p>N° Cuotas por Año</p>
                        <input type="text"/>
                    </div>

                    <div className='cal_totalcuotas'>
                        <p>N° Total de cuotas </p>
                        <input type="text"/>
                    </div>

                    <div className='cal_seguriesgo'>
                        <p>Seguro de Riesgo</p>
                        <input type="text"/>
                    </div>

                    <div className='cal_intereses'>
                        <p>Intereses</p>
                        <input type="text"/>
                    </div>

                    <div className='cal_amortcap'>
                        <p>Amortización del Capital</p>
                        <input type="text"/>
                    </div>

                </div>
                
                
            </div>

        </div>
    </div>
  );
}

export default Calcular1;
