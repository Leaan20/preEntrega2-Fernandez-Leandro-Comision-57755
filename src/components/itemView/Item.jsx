import './Item.css';
import { Link } from 'react-router-dom';
export default function Item ({title,category,price,image,idItem , idProdc, brand}){
    return (
        <>
        <div className='card'  id={idItem}>
            <img className='img' src={image} alt={title}></img>
            <div>
            <h4 className='cardTitle'>{title}</h4>
            <h5 className='brand'>Marca: {brand}</h5>
            <h6 className='category'>Categoria: {category}</h6>
            <p>Precio: ${price}</p>
            </div>
            <button className='buttonStyle'><Link to={`/item/${idProdc}`}>Ver detalles</Link></button>
        </div>
        </>
    )
}
