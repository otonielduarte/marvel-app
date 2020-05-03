import React, { useState, useEffect } from 'react';
import './Search.scss';

const Search = ({ onSearch }) => {

	const[text, setText] = useState('');

	useEffect(() => {
		let searchTimer = setTimeout(() => {
			onSearch(text);
		}, 500);
		return () => clearTimeout(searchTimer);
	}, [text]);

	return (
		<div className="search-component">
			<i className="fas fa-search"></i>
			<input onChange={e => setText(e.target.value)} id="search" className="input-search" placeholder="Search"></input>
		</div>
	);
}

export default Search;
