import Form from './components/form/Form';
import Home from './components/home/Home';
import Nav from './components/nav/Nav.jsx';
import Cards from './components/cards/Cards.jsx';
import Detail from './components/detail/Detail';
import About from './components/about/About.jsx';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

function App() {
  const Navigate = useNavigate();
  const [ access, setAccess ] = useState(false);
  const email = "micheloudrionlucia@gmail.com"
  const password = "123pedo"


  function logout() {
    setAccess(false);
  }
  function login(userData) {
      if(userData.email === email && userData.password == password){
          setAccess(true);
          Navigate('/home');
      }
  }

  useEffect(()=>{
      !access && Navigate('/')
  }, [access]);



  // function onSearch(dato) {
  //   // agrega personajes a characters
  //   axios(`http://localhost:3001/character/${dato}`)

  //   .then((respuesta) => {    
  //      if (respuesta.data.name) {
  //       setCharacters((oldChars) => [...oldChars, respuesta.data]);
  //      } else {
  //      }
  //     })
  //     .catch((err) => window.alert("No se encontro el ID!"));
  // }

  function onSearch(dato) {
    // agrega personajes a characters
    axios(`http://localhost:3001/character/${dato}`)
      .then((respuesta) => {
        if (respuesta.data.name) {
          // antes de agregar busco si "ya existe". Como lo harias?
          // tu codigo aquí:
          // if("yaExiste") return
          setCharacters((oldChars) => [...oldChars, respuesta.data]);
        } else {
        }
      })
      .catch((err) => alert(err.response.data.error));
  }

function onClose(id) {
  setCharacters(
    characters.filter((charac) => {
      return charac.id !== Number(id);
    })
  );
  //const charactersFiltered = characters.filter(character => character.id !== Number(id))
}

  const [characters, setCharacters] = useState([]);
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
    element={<Form login={login} />}/>

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

