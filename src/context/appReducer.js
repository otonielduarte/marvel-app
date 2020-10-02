const { useReducer } = require("react");

const intialState = {
    characters: [],
    pageInfo: { page: 1, total: 0 },
    attributions: {},
    loading: true,
    textSearch: ''
}

const [state, dispatch] = useReducer((current, action) => {
    switch (action.type) {
        case 'LOADING': {
            return [{ ...current, loading: action.payload }]
        }

        case 'SEARCH': {
            getList(null, action.payload ? action.payload : null);
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