import React, { useState, createContext, useCallback, useContext, useMemo, useRef } from 'react';
import { api } from '../services/api';
import CharacterModel from '../models/CharacterModel';


const AppContext = createContext({});

export const AppProvider = ({ children }) => {

  let textSearch = useRef(null);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({});

  const getList = useCallback((page = 0, searchValue = null) => {
    setLoading(true)
    api.get('/characters', page, searchValue).then(response => {
      textSearch.current = searchValue;
      setValues(response.data);
    }).finally(() => setLoading(false));
  }, [setValues])

  const onSearch = useCallback(text => {
    const stringText = text ? text : null;
    getList(0, stringText)
  }, [getList])

  const onPaginate = useCallback((page) => {
    getList(page, textSearch.current);
  }, [getList, textSearch])

  const characters = useMemo(() => {
    if (!values.data) return [];
    const { data } = values;
    return data.results.map(character => new CharacterModel(character))
  }, [values])

  const pageInfo = useMemo(() => {
    if (!values.data) return [];
    const { data } = values;
    return { page: data.offset, total: data.total }
  }, [values])

  const attributions = useMemo(() => {
    const { attributionHTML, attributionText } = values;
    return { attributionHTML, attributionText };
  }, [values])

  return (
    <AppContext.Provider
      value={{ onSearch, onPaginate, attributions, characters, pageInfo, loading }}>
      {children}
    </AppContext.Provider>
  )
}

export function useSearch() {
  const appContext = useContext(AppContext);
  return appContext;
}
