import React, { useState, useEffect, useCallback, memo, useContext } from 'react';
import AppContext from '../../context/context';
import './Search.scss';

const Search = (props) => {

	const[text, setText] = useState('');
	const { onSearch } = useContext(AppContext);

	const handleSearch = useCallback(() => {
		onSearch(text)
	}, [text, onSearch])

	useEffect(() => {
		let searchTimer = setTimeout(() => {
			handleSearch(text);
		}, 800);
		return () => clearTimeout(searchTimer);
	}, [text, handleSearch]);

	return (
		<div className="search-component">
			<i className="fas fa-search"></i>
			<input onChange={e => setText(e.target.value) } id="search" className="input-search" placeholder="Search"></input>
		</div>
	);
}

export default memo(Search);
