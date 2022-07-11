import './styles/App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import { AuthContext } from './components/context';
import { useEffect, useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loggedName, setLoggedName] = useState('');

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, [])


  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading,
      loggedName,
      setLoggedName,
    }}>
      <Router>
        <div className="App">
          <Header/>
        </div>
      </Router>
    </AuthContext.Provider>
    
    
  );
}

export default App;
