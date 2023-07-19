import Card from '../card/Card';
import './cards.css';

export default function Cards({ characters, onClose }) {
 return (
    <div className='cards-container'>
      {
         characters.map(({ id, name, status, species, gender, origin, image }) => {
            return(
               <Card
                  key={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  image={image}
                  origin={origin.name}
                  onClose={onClose}
                  />
               )
            }) 
         }
      </div>
   )
}
