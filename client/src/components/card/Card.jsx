import { Link } from 'react-router-dom';
import './card.css';

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div className='card-container'>
         
         <button className='card-button'  onClick={() => onClose(id)}>x</button>
         <h2 className='title'>{name}</h2>
        
         <Link to={`/detail/${id}`}>
          <img className={"cardImage"} src={image} alt={name} />
         </Link>

         <div className='details'>
           <h2>{species} {gender} {status}</h2>
           <h2>{origin}</h2>
         </div>

      </div>
   );
}
