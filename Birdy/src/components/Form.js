import React, { useState } from 'react';
import '../styles/Form.css';

function Form(){
  const [Login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isNewUser, setIsNewUser] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to the server or do some other action.
  };

  return (
    <div>
      <h2>{isNewUser ? 'Créer un compte' : 'Se connecter'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="Login" id="Login" value={Login} placeholder="Votre Login.."
            onChange={(event) => setLogin(event.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password" id="password" value={password} placeholder="Votre mot de passe.."
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        {isNewUser && (
          <div>
            <input type="date" id="birthdate" value={birthdate}
              onChange={(event) => setBirthdate(event.target.value)}
              required
            />
          </div>
        )}
        {isNewUser && (
          <div>
            <input type="password" id="confirmPassword" value={confirmPassword} placeholder="Confirmez votre mot de passe.."
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>
        )}
        <button type="submit">{isNewUser ? 'Créer un compte' : 'Se connecter'}</button>
    
      </form>
      <div >
        <button type = "submit2" onClick={() => setIsNewUser(!isNewUser)}>
          {isNewUser ? 'Se connecter' : 'Créer un compte'}
        </button>
      </div>
     
    </div>
  );
};

export default Form;
