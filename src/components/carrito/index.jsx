import { Icon } from '@iconify/react';
import Cantidad from '../contador';

const Carrito = () => {
    return(
        <div className='carrito'>
            <Icon icon="mdi-light:cart" />
            <Cantidad quantity={0}/>
        </div>
    );
};

export default Carrito;