import React, {
  useState,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
} from 'react';
import md5 from 'md5';
import api from '../services/api';

import { PayloadApi, AppContextProps } from '../models/interfaces';

const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const AppProvider: React.FC = ({ children }) => {
  const textSearch = useRef<string>('');
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<PayloadApi>({} as PayloadApi);

  const getList = useCallback(
    (page = 0, searchValue = null) => {
      setLoading(true);
      const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY || '';
      const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY || '';
      const ts = new Date().getTime();
      const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY);
      api
        .get<PayloadApi>('/characters', {
          params: {
            nameStartsWith: searchValue,
            apikey: PUBLIC_KEY,
            ts,
            hash,
            limit: 10,
            offset: page,
          },
        })
        .then(response => {
          textSearch.current = searchValue;
          setValues(response.data);
        })
        .finally(() => setLoading(false));
    },
    [setValues],
  );

  const onSearch = useCallback(
    text => {
      const stringText = text || null;
      getList(0, stringText);
    },
    [getList],
  );

  const onPaginate = useCallback(
    page => {
      getList(page, textSearch.current);
    },
    [getList, textSearch],
  );

  const characters = useMemo(() => {
    if (!values.data) return [];
    const { data } = values;
    return data.results;
  }, [values]);

  const pageInfo = useMemo(() => {
    const { data } = values;
    return { page: data?.offset, total: data?.total };
  }, [values]);

  const attributionText = useMemo(() => {
    return values.attributionText;
  }, [values]);

  return (
    <AppContext.Provider
      value={{
        onSearch,
        onPaginate,
        attributionText,
        characters,
        pageInfo,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useSearch(): AppContextProps {
  const appContext = useContext(AppContext);
  return appContext;
}
