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
        <h1>Inscription</h1>
        <form>
        <label htmlFor="fname"><big> Name : </big></label>

        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Votre nom et prenom.." /> 
        
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Votre e-mail.."/>
        <input value={dateNaissance} onChange={(e) => setDateNaissance(e.target.value)} placeholder="Votre Date de naissance.."/>
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Votre mot de passe."/>
        <input value={password2} onChange={(e) => setPassword2(e.target.value)} placeholder="Confirmez votre mot de passe.." />
        <button type="submit">Submit</button>
        </form>

    </div>
    );
}

export default Inscription;