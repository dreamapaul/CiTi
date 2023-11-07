import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Components/home'
import Login from './Components/login'
import Signin from './Components/signin'
import Userhomepage from './Components/userhomepage'

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<HomePage/>}></Route>
            <Route path="/login" exact element={<Login/>}></Route>
            <Route path="/signin" exact element={<Signin/>}></Route>
            <Route path="/userhomepage" exact element={<Userhomepage/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
