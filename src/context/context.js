import React, { useState, createContext, useCallback } from 'react';
import { ApiUtil } from '../services/api';
import CharacterModel from '../models/CharacterModel';

const AppContext = createContext({});

export const AppProvider = ({ children }) => {

    const [characters, setCharacters] = useState([]);
    const [pageInfo, setPageInfo] = useState({ page: 1, total: 0 });
    let textSearch = null;

    const getList = async (page, name) => {
        try {
            const response = await ApiUtil.get('/characters', page, name);
            if (response.data) {
                const resultData = response.data.data;
                setResponse(resultData);
            }
        } catch (e) {
            console.error(e);
        }
    }

    const setResponse = useCallback((resultData) => {
        setPageInfo({ page: resultData.offset, total: resultData.total });
        setCharacters(resultData.results.map(character => new CharacterModel(character)));
    }, [])

    const onSearch = (text) => {
        textSearch = text ? text : null;
        getList(0, textSearch);
    }

    const onPaginate = (page) => {
        getList(page, textSearch);
    }

    return (
        <AppContext.Provider value={{ characters, onSearch, total: pageInfo.total, onPaginate }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;
