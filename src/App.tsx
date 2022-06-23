import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import NewPost from './pages/NewPost';
import PostDetails from './pages/PostDetails';
import Posts from './pages/Posts';
import PostUser from './pages/PostUser';
import Register from './pages/Register';
import Users from './pages/Users';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/users/:id/posts' element={<PostUser/>} />  
        <Route path='/users/:id/posts/new/:postId' element={<NewPost/>} />  
        <Route path='/users/:id/posts/new' element={<NewPost/>} />  
        <Route path='/register' element={<Register/>} />    
        <Route path='/posts' element={<Posts/>} /> 
        <Route path='/posts/:id' element={<PostDetails/>} />            
      </Routes>
    </Router>
  );
}

export default App;
