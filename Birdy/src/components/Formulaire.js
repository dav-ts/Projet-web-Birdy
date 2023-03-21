import React from 'react';
import '../styles/Formulaire.css'

function Formulaire(){

    const onSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value;

        alert(`Submitted Name: ${name}`);
    };


    return  (<div >
        <h1>Se Connecter </h1>
        <div className="Container">
            <form action="" method = "post" id="form">
            <label htmlFor="fname"><big>Login</big></label>
            <input type="text" id="fname" className="fname"  placeholder="Votre login.."/>
            <label htmlFor="lname"><big>Mot de passe</big></label>
            <input type="text" id="lname" className="lname"  placeholder="Votre mot de passe.."/>
            <input type = "submit" value = "connexion " /> 
            <input type="submit" value="Annuler"/> 
            </form>
            
        </div>
    </div>
    );
}
export default Formulaire;