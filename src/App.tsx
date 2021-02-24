import React from 'react';

import AppHeader from './components/AppHeader';
import Main from './components/Main';
import Footer from './components/Footer';
import { AppProvider } from './hooks/search';

import './styles/App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppProvider>
        <AppHeader />

        <Main />

        <Footer />
      </AppProvider>
    </div>
  );
};

export default App;
