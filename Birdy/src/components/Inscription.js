import React from 'react';
import '../styles/Inscription.css';
import { useState } from 'react';

function Inscription(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };


    const onSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value;

        alert(`Submitted Name: ${name}`);
    };
    

    return (<div> 
        <h1>Creez votre compte</h1>
        
        <form>
        <input id="nom" value={name} onChange={(e) => setName(e.target.value)} placeholder="Votre nom et prenom.." /> 
        
        <input id ="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Votre e-mail.."/>
        <input id="dateNaiss" value={dateNaissance} onChange={(e) => setDateNaissance(e.target.value)} placeholder="Votre Date de naissance.."/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Votre mot de passe.."/>
        <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder="Confirmez votre mot de passe.." />
        <button  className="btn-submit"><big>Submit</big></button>
        <button  className="btn-submit"><big>Annuler </big></button>
        
        </form>

    </div>
    );
}

export default Inscription;