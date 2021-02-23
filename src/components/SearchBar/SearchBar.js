import React, { useCallback, useEffect } from 'react';
import { useSearch } from '../../context/context';
import debounce from '../../util/debounce'

import './Search.scss';

const SearchBar = (props) => {

	const { onSearch } = useSearch();
  const debounceOnChange = useCallback(debounce(onSearch, 500), []);

  useEffect(() => {
    onSearch(null)
  }, [onSearch])

	return (
		<div className="search-component">
			<i className="fas fa-search"></i>
			<input onChange={e => debounceOnChange(e.target.value) } id="search" className="input-search" placeholder="Search"></input>
		</div>
	);
}

export default React.memo(SearchBar);
