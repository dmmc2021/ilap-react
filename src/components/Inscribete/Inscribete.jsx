import React from "react";
import Button from 'react-bootstrap/Button';
import Pago from "../Pago/Pago.jsx"



function Inscribete(){
    return(
        <section className="info-last">
            <div className="contenedor last-section">
                <div className="contenedor-textos-main">
                    <h2 className="titulo left">Elige lo mejor para tu futuro!</h2>
                    <p className="parrafo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ullam aliquam perspiciatis, dolore quaerat odio laudantium adipisci laboriosam libero quis voluptas cupiditate exercitationem soluta distinctio magnam dignissimos. Aspernatur, veniam aperiam.</p>
                    <Button variant="primary" size="lg">Inscribete</Button>
                </div>
                
            
            </div>
            <Pago />

            
            <div className="svg-wave" style={{height: "150px", overflow: "hidden"}}><svg viewBox="0 0 500 150"preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#683ec9"}}></path></svg>
        </div>
    </section>
    
    
        
    )
}

export default Inscribete;
   
    
        
