import React, { useState, createContext, useCallback, useContext } from 'react';
import { ApiUtil } from '../services/api';
import CharacterModel from '../models/CharacterModel';


const AppContext = createContext({});

export const AppProvider = ({ children }) => {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageInfo, setPageInfo] = useState({ page: 1, total: 0 });
    const [attributions, setAttributions] = useState({});
    const [textSearch, setText] = useState('');

    const getList = useCallback(async (page, name) => {
        try {
            setLoading(true);
            const response = await ApiUtil.get('/characters', page, name);
            if (response.data) {
                const resultData = response.data;
                setPageInfo({ page: resultData.data.offset, total: resultData.data.total });
                setCharacters(resultData.data.results.map(character => new CharacterModel(character)));
                setAttributions(() => {
                    return { attributionHTML: resultData.attributionHTML, attributionText: resultData.attributionText }
                })
            }
            setLoading(false);
        } catch (e) {
            console.error(e);
        }
    }, [setPageInfo, setLoading, setCharacters, setAttributions])

    const onSearch = useCallback(text => {
        const stringText = text ? text : null;
        setText(stringText);
        getList(null, stringText);
    }, [getList])

    const onPaginate = useCallback((page) => {
        getList(page, textSearch);
    }, [getList, textSearch])
   

    return (
        <AppContext.Provider value={{ onSearch, onPaginate, attributions, characters, loading, pageInfo }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    const appContext = useContext(AppContext);

    if(!appContext) {
        throw new Error('appContext must be used within an AuthProvider ');
    }

    return appContext;
}
