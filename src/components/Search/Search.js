import React, { useState, useEffect, useCallback, memo } from 'react';
import { useCharacters } from '../../context/context';
import './Search.scss';

const Search = (props) => {

	const[text, setText] = useState('');
	const { dispatch } = useCharacters();

	const handleSearch = useCallback((string) => {
		dispatch({ type: 'SEARCH', payload: string })
	}, [dispatch])

	useEffect(() => {
		let searchTimer = setTimeout(() => {
			handleSearch(text)
		}, 800);
		return () => clearTimeout(searchTimer);
	}, [text, handleSearch]);

	return (
		<div className="search-component">
			<i className="fas fa-search"></i>
			<input onChange={e => setText(e.target.value) } value={text} id="search" className="input-search" placeholder="Search"></input>
		</div>
	);
}

export default memo(Search);
