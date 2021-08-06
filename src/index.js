import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header/Header.jsx";
import Impulsa from "./components/Impulsa/Impulsa.jsx";
import Ofrecemos from "./components/Ofrecemos/Ofrecemos.jsx"
import Galeria from "./components/Galeria/Galeria.jsx"
import Inscribete from "./components/Inscribete/Inscribete.jsx"
import Contacto from "./components/Contacto/Contacto.jsx"
import Social from "./components/Social/Social.jsx"
import CrearNoticia from "./components/Menu/CrearNoticia.jsx"
import Container from "./components/Container/Container.jsx"
import Cursos from "./components/Cursos/Cursos.jsx"
/*mport Selectcurso from "./components/Selectcurso/Selectcurso.jsx"*/
import CargaCurso from "./components/CargaCurso/CargaCurso.jsx"
import Login from "./components/Menu/Login.jsx"

import "./css/estilo.css";
import './css/bootstrap.min.css';
import "./firebase/firebase"


const divRoot = document.querySelector("#root");

ReactDOM.render([<Header />,<Impulsa />, <Ofrecemos />, <Cursos />, <Galeria />, <CrearNoticia />, <Container />, <Inscribete />, <Contacto />, <Social />, <CargaCurso />, <Login />], divRoot)
