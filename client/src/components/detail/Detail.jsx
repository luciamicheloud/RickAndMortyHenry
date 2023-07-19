import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import "./detail.css";

export default function Detail() {
    const { id } = useParams();

    const [characterDetail, setCharacterDetail] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacterDetail(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        }
      ).catch(err => window.alert("Error"));

      //desmontaje
   return () => {

   };
}, []);

     return (
        <div>
            <h2>{characterDetail.name}</h2>
            <section>
            <span>Especie: {characterDetail.specie}</span>
            <span>Genero: {characterDetail.gender}</span>
            <span>Estatus:{characterDetail.status}</span>
            <span>Origen: {characterDetail.origin?.name}</span>
            </section>
            <img src={characterDetail.image} alt="imagen del personaje"/>
        </div>
     )//si se llega a romper es por lo de condicionales

}
//dependencia vacia useEfect
//[]
