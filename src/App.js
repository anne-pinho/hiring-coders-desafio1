import './App.css';
import React, { useState } from 'react';
import LogoHeader from './images/logo-header.png';
import LogoLetra from './images/logo-branca.png';
import LogoSacola from './images/sacola-desconto.png'

function App() {
  const [usuario, setUsuario] = useState('');
  const [nome, setNome] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  function handleChange(event) {
    setUsuario(event.target.value)
  }

  function nomeUsuario(event) {
    setNome(event.target.value)
  }

  function handleClick() {
    console.log(usuario);
    localStorage.setItem('email', usuario);
    localStorage.setItem('nome', nome)
    setIsSuccess (true);
  }

  return (
    <div className="App">
      <div className="header">
        <img src={LogoHeader} alt="logoHeader" />
        <img src={LogoLetra} alt="logoLetra" />

        <div className="divFrete">
          <h2>Frete Grátis</h2>
        </div>
      </div>

      <div className="main">
        <div className="section1">
          <h1>BLACK FRIDAY </h1>
          <h2>Descontos de até 80%</h2>
          <img src={LogoSacola} alt="logoSacola" />
        </div>
        <div className="section2">
          <p>CADASTRE-SE PARA RECEBER AS MELHORES OFERTAS</p>
          <input type="text" placeholder="nome" value={nome} onChange={nomeUsuario} />
          <input type="text" placeholder="email" value={usuario} onChange={handleChange} />
          <button onClick={handleClick} type="submit">CADASTRAR</button>
          {isSuccess ? <span>Usuário cadastrado.</span> : null}
        </div>
      </div>

      <div className="footer">
        <p>Desenvolvido por Anne Pinho</p>
        <p>Desafio Hiring Coders#2</p>
      </div>
    </div>
  );
}

export default App;
