import React, { useContext, useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import { CarritoContext } from '../../context/carritoContext';



const PaymentForm = () => {
    const { LimpiarCarrito } = useContext(CarritoContext);
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: '',
        focus: '',
    });

    const handleInputChange = (evt) => {
        const { name, value } = evt.target;
        setState((prev) => ({ ...prev, [name]: value }));
    };

    const handleInputFocus = (evt) => {
        setState((prev) => ({ ...prev, focus: evt.target.name }));
    };

    return (
        <div className='payment-overlay'>
            <div className='payment-form'>
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
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            maxLength={16}
                            />
                        <input
                            className='input-form' 
                            type='text'
                            name='name'
                            placeholder="Nombre y Apellido"
                            value={state.name} 
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            />
                        <input
                            className='input-form'
                            type='text'
                            name='expiry'
                            placeholder="Fecha de expiración"
                            value={state.expiry} 
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            maxLength={4}
                        />
                        <input
                            className='input-form' 
                            type='text'
                            name='cvc'
                            placeholder="Código de seguridad"
                            value={state.cvc} 
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            maxLength={4}
                        />
                    </div>
                    <div className="comprar-tarjeta">
                        <button  className="tarjeta" type='submit' onClick={LimpiarCarrito}>Comprar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PaymentForm;