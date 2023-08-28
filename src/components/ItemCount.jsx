import '../css/itemcount.css'


const ItemCount = ({cantidad, sumar, restar, agregar}) => {
  
  return (
    <>
    <div className='count'>
    <button className='botonRestar' onClick={restar}>-</button>
    <p className='cantidad'>{cantidad}</p>
    <button className='botonSumar' onClick={sumar}>+</button>
     
     
    </div>
    <div className='containerAgregar'>
    <button className="botonAgregar" onClick={agregar}>Agregar al carrito</button>
    </div>
    </>
  );
};

export default ItemCount;