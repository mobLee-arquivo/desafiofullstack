import React from 'react';
import Home from './pages/Home';

export const AppContext = React.createContext({});

const App: React.FC = () => {
  const [questions, setQuestions] = React.useState([]);
  
  return <>
    <AppContext.Provider value={{ questions, setQuestions }}>
        <Home />    
    </AppContext.Provider>
  </>;
}

export default App;