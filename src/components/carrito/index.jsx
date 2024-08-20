import { Icon } from '@iconify/react';
import Cantidad from '../cantidad';

const Carrito = () => {
    return(
        <div className='carrito'>
            <Icon icon="mdi-light:cart" />
            <Cantidad quantity={3}/>
        </div>
    );
};

export default Carrito;