import React, { useCallback, useEffect } from 'react';
import { useSearch } from '../../hooks/search';
import debounce from '../../util/debounce';

import './Search.scss';

const SearchBar: React.FC = () => {
  const { onSearch } = useSearch();

  useEffect(() => {
    onSearch('');
  }, [onSearch]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceOnChange = useCallback(debounce(onSearch, 500), [onSearch]);

  return (
    <div className="search-component">
      <i className="fas fa-search" />
      <input
        id="search"
        className="input-search"
        placeholder="Search"
        onChange={e => debounceOnChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
