import React from 'react';
import './Main.scss';
import SearchBar from '../SearchBar';
import List from '../List';

const Main: React.FC = () => (
  <main className="App-main">
    <div className="container">
      <header>
        <h1 className="title">Busca de personagens</h1>
        <p>Nome do personagem</p>

        <SearchBar />

        <div className="header-character">
          <p className="head-1">Personagem</p>
          <p className="head-2">Séries</p>
          <p className="head-3">Eventos</p>
        </div>
      </header>

      <List />
    </div>
  </main>
);

export default Main;
