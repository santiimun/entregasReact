import React, { useContext, useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import { CarritoContext } from '../../context/carritoContext';
import Swal from 'sweetalert2';



const PaymentForm = () => {
    const { LimpiarCarrito } = useContext(CarritoContext);
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });
    const [isFormVisible, setIsFormVisible] = useState(true); 
    const [isOverlayVisible, setIsOverlayVisible] = useState(true); 

    const FinalizarCompra = () => {
        
        Swal.fire({
            title: "Pago exitoso!!",
            icon: "success"
        }).then(() => {
            LimpiarCarrito(); 
            setIsOverlayVisible(false); 
        });
    };

    const manejarEntradaCambiar = (evt) => {
        const { name, value } = evt.target;
        setState((prev) => ({ ...prev, [name]: value }));
    };

    const CamposLlenos = () => {
        return state.number && state.expiry && state.cvc && state.name;
    };

    const manejarEnfoquedeentrada = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    };

    if (!isOverlayVisible) return null; 

    return (
        <div className='payment-overlay'>
            <div className='payment-form'>
                {isFormVisible && ( 
                    <>
                        <Cards
                            number={state.number}
                            expiry={state.expiry}
                            cvc={state.cvc}
                            name={state.name}
                            focused={state.focus}
                        />  
                        <form>
                            <div className='form'>
                                <input
                                    className='input-form'
                                    type='text'
                                    name="number"
                                    placeholder="Número de tarjeta"
                                    value={state.number}
                                    onChange={manejarEntradaCambiar}
                                    onFocus={manejarEnfoquedeentrada}
                                    maxLength={16}
                                />
                                <input
                                    className='input-form' 
                                    type='text'
                                    name='name'
                                    placeholder="Nombre y Apellido"
                                    value={state.name} 
                                    onChange={manejarEntradaCambiar}
                                    onFocus={manejarEnfoquedeentrada}
                                />
                                <input
                                    className='input-form'
                                    type='text'
                                    name='expiry'
                                    placeholder="Fecha de expiración"
                                    value={state.expiry} 
                                    onChange={manejarEntradaCambiar}
                                    onFocus={manejarEnfoquedeentrada}
                                    maxLength={4}
                                />
                                <input
                                    className='input-form' 
                                    type='text'
                                    name='cvc'
                                    placeholder="Código de seguridad"
                                    value={state.cvc} 
                                    onChange={manejarEntradaCambiar}
                                    onFocus={manejarEnfoquedeentrada}
                                    maxLength={3}
                                />
                            </div>
                            <div className="comprar-tarjeta">
                                <button
                                    className="tarjeta"
                                    type='button' 
                                    onClick={() => {
                                        if (CamposLlenos()) {
                                            FinalizarCompra();
                                        } else {
                                            Swal.fire({
                                                icon: 'warning',
                                                title: 'Campos incompletos',
                                                text: 'Por favor completa todos los campos.',
                                                confirmButtonText: 'Aceptar',
                                            });
                                        }
                                    }}
                                >
                                    Comprar
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default PaymentForm;