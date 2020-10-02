import React, { useState, createContext, useCallback, useReducer, useContext } from 'react';
import { ApiUtil } from '../services/api';
import CharacterModel from '../models/CharacterModel';


const intialState = {
    characters: [],
    pageInfo: { page: 1, total: 0 },
    attributions: {},
    loading: true,
    textSearch: ''
}

const AppContext = createContext({});

export const AppProvider = ({ children }) => {

    const getList = useCallback( async (page, name) => {
        try {
            const response = await ApiUtil.get('/characters', page, name);
            if (response.data) {
                dispatch({ type: 'UPDATE', payload: response.data })
                return response.data;
            }
        } catch (e) {
            console.error(e);
        }
    }, [ ])

    const [state, dispatch] = useReducer((current, action) => {
 
        switch(action.type) {
            case 'LOADING': {
                return [{...current, loading: action.payload}]
            }
            
            case 'SEARCH': {
                getList(null, action.payload? action.payload: null);
                return current;
            }
            case 'PAGINATE': {
                return current;
            }
            case 'UPDATE': {
                const resultData = action.payload;
                const newState = {
                    pageInfo: { page: resultData.data.offset, total: resultData.data.total },
                    characters: resultData.data.results.map(character => new CharacterModel(character)),
                    attributions: { attributionHTML: resultData.attributionHTML, attributionText: resultData.attributionText }
                }
                return newState;
            }
            default: return current;
        }
    }, intialState);

    /* const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageInfo, setPageInfo] = useState({ page: 1, total: 0 });
    const [attributions, setAttributions] = useState({});
    const [textSearch, setText] = useState('');

    const setResponse = useCallback(resultData => {
        setPageInfo({ page: resultData.data.offset, total: resultData.data.total });
        setCharacters(resultData.data.results.map(character => new CharacterModel(character)));
        setAttributions(() => {
            return { attributionHTML: resultData.attributionHTML, attributionText: resultData.attributionText }
        })
    }, []);

    

    const onSearch = useCallback(text => {
        const stringText = text ? text : null;
        setText(stringText);
        getList(null, stringText);
    }, [getList])

    const onPaginate = useCallback((page) => {
        getList(page, textSearch);
    }, [getList, textSearch]) */

   

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    )
}

export function useCharacters() {
    const context = useContext(AppContext);
    return context;
}


