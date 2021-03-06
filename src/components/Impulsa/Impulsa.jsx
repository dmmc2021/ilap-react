import React from "react";
import Button from 'react-bootstrap/Button';


function Impulsa(){
    return(

        <section className="wave-contenedor website">
        <img src="/img/imagen1.jpg" alt=""></img>
        <div className="contenedor-textos-main">
           <h2 className="titulo left">Impulsa tu talento!!!</h2> 
           <p className="parrafo">El Instituto Latinoamericano de Actualización Profesional, ILAP, nace con el objetivo de satisfacer las crecientes necesidades de adiestramiento dentro del mundo empresarial en Latinoamérica a través de capacitación, tanto presencial como online, para facilitar el aprendizaje e impulsar el talento humano.</p>
           <Button variant="primary" size="lg">+ info</Button>
        </div>

    </section>
   
    
        
    )
}

export default Impulsa;