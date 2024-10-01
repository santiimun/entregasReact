const ContadorProductos = ({count, setCount}) => {

    const incremento = () => setCount(cont => cont + 1);
    const decremento = () => setCount(cont => (cont > 0 ? cont - 1 : 0));

    return (
        <>
            <div className="detalle-boton">
                <button onClick={decremento} className="detalle-cont">-</button>
                <input className="detalle-input" type="text" value={count} readOnly />
                <button onClick={incremento} className="detalle-cont">+</button>
            </div>
        </>
    );
}

export default ContadorProductos;
