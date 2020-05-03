import React from 'react';
import './AppHeader.scss'

const AppHeader = ({ name }) => (
	<header className="App-header">
		<div className="objective-img">
			<img alt="objectve-img" async src="https://www.objective.com.br/wp-content/uploads/2017/03/objective-empresa-de-desenvolvimento-de-software-metodologia-agil.png"></img>
		</div>
		<div className="candidate-info">
			<div className="block-text">
				<span className="text-destac">Nome do candidato </span>
				<span className="text-name">{name}</span>
			</div>
			<div className="info-cb">
				<span >CB</span>
			</div>
		</div>
	</header>
);


AppHeader.defaultProps = {
	name: 'Otoniel Moreira Duarte',
};

export default AppHeader;
