import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About.jsx';
import { useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from './components/home/Home';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';



function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(dato) {
    // agrega personajes a characters
    fetch(`https://rickandmortyapi.com/api/character/${dato}`)
    .then(respuesta => respuesta.json())
    .then((respuestaJson) => {
    
       if (respuestaJson.name && !characters.find((character) => character.id === respuestaJson.id)) 
       {
          setCharacters(
          
             ( (oldChars) => [...oldChars, respuestaJson])
           
           );
       }
       
     else if(respuestaJson.name) {
       
    }
    else{
       window.alert("¡No hay personajes con este ID!")
    }
    })
    .catch((err) => window.alert("No se encontro el ID!"));

 }

const onClose = (id) => {
  const charactersFiltered = characters.filter(character => character.id !== Number(id))
  setCharacters(charactersFiltered)
}

const location = useLocation();


//rutas
return (
  <div className={App}>
    {
      location.pathname !== "/" && <Nav onSearch={onSearch} />
    }

  <hr />

  <Routes>

    <Route path='/'
    element={<Form />}/>

    <Route path='/home'
    element={<Cards characters={characters} onClose={onClose}/>}/>

    <Route path="/about"
    element={<About/>} />
  
    <Route path='/detail/:id' 
    element={<Detail/>}/>
  
  </Routes>
  </div>
)


}


export default App;

