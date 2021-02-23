import React, { useCallback, useEffect } from 'react';
import { useSearch } from '../../context/context';
import debounce from '../../util/debounce';

import './Search.scss';

const SearchBar = () => {
  const { onSearch } = useSearch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceOnChange = useCallback(debounce(onSearch, 500), []);

  useEffect(() => {
    onSearch('');
  }, [onSearch]);

  return (
    <div className="search-component">
      <i className="fas fa-search" />
      <input
        onChange={e => debounceOnChange(e.target.value)}
        id="search"
        className="input-search"
        placeholder="Search"
      />
    </div>
  );
};

export default React.memo(SearchBar);
