import React, { useState } from "react";
import {auth} from "../../firebase/firebase.js";

const Login=()=>{

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const RegistrarUsuario = (e)=>{
        
        e.preventDefault()
        try{
            auth.createUserWithEmailAndPassword(email, pass)
        }catch (e){
            console.log(e)
        }
    }

    return(
        <div className="caja-login">
        
            <form onSubmit="{RegistrarUsuario}" className="style-login">
                    <h3>LOGIN - ILAP</h3>
                    <input  onChange={(e)=>{setEmail(e.target.value)}}
                            className="form-control login-input" 
                            type="text" 
                            placeholder="Introduzca el Email" />
                    <input  onChange={(e)=>{setPass(e.target.value)}}
                            className="form-control login-input" 
                            type="text" 
                            placeholder="Introduce el Password" />
                    
                    <input type="submit" value="Ingresar" className="btn btn-dark "/>
            </form>
        </div>
    
    
    )
}

export default Login 