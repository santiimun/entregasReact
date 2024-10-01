import { Icon } from '@iconify/react';
import Cantidad from '../contador';
import { useContext } from 'react';
import { CarritoContext } from '../../context/carritoContext';

const Carrito = () => {
    const { carritoProductos } = useContext(CarritoContext);
    
    
    const totalQuantity = carritoProductos.reduce((acc, producto) => acc + producto.quantity, 0);
    
    return (
        <div className='carrito'>
            <Icon icon="mdi-light:cart" />
            <Cantidad quantity={totalQuantity} />
        </div>
    );
};

export default Carrito;
