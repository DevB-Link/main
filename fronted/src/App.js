import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

function App(){

  /*const getApi = async () => {
    axios.get("/api").then((res) => console.log(res.data));
  };

  useEffect(() => {
    getApi();
  }, []);
*/
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  )
}

export default App;