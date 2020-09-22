import React from 'react';
import './Main.scss';
import Search from '../Search'
import List from '../List'

const Main = props => {

	return (
		<main className="App-main">
			<section className="container">
				<header >
					<h1 className="title">Busca de personagens</h1>
					<p>Nome do personagem</p>
					<Search  />
				</header>
				
				<div className="header-character">
					<p className="head-1">Personagem</p>
					<p className="head-2">Séries</p>
					<p className="head-3">Eventos</p>
				</div>

				<List/>

			</section>
		</main>
	);
}

export default Main;
