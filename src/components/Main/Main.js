import React, { useContext, useState } from 'react';
import './Main.scss';
import Search from '../Search'
import AppContext from '../../context/context';
import Character from '../Character';

const Main = props => {

	const [selected, setSelected] = useState(-1);
	const { onSearch, characters } = useContext(AppContext);

	return (
		<main className="App-main">
			<section className="container">
				<h1 className="title">Busca de personagens</h1>
				<p>Nome do personagem</p>
				<Search onSearch={text => onSearch(text)} />

				<header className="header-character">
					<p className="head-1">Personagem</p>
					<p className="head-2">Séries</p>
					<p className="head-3">Eventos</p>
				</header>

				{
					characters.map((character, index) => 
						<Character 
							handleClick={() => selected === index ? setSelected(-1) : setSelected(index)}
							active={index === selected}
							character={character} 
							key={'character' +character.name}/>)
				}
			</section>
		</main>
	);
}

export default Main;
