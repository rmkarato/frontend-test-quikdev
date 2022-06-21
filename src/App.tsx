import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Posts from './pages/Posts';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/register'>Cadastrar</Link>
          </li>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
        </ul>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />    
          <Route path='/posts' element={<Posts/>} />        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
