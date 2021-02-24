import React from 'react';
import './AppHeader.scss';
import logo from '../../assets/images/marvel.png';

interface HeaderProps {
  name?: string;
}

const AppHeader: React.FC<HeaderProps> = ({ name }) => (
  <header className="App-header">
    <div className="header-img">
      <img alt="logo-img" src={logo} />
    </div>
    <div className="candidate-info">
      <div className="block-text">
        <span className="text-destac">Desenvolvedor: </span>
        <span className="text-name">{name}</span>
      </div>
      <div className="info-cb">
        <span>CB</span>
      </div>
    </div>
  </header>
);

export default AppHeader;
