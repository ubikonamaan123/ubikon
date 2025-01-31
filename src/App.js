import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './assets/css/style.css'
import './assets/css/admin/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';


import Home from './pages/Home';

import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/admin/Login";
import PostUpload from "./pages/admin/PostUpload";

function App() {
  return ( 
    <>
     <Router>
        <Routes>
            {/* frontend pages */}
            <Route path="/" element={<Home />} />
               {/* admin pages */}
             <Route path="dashboard" element={<Dashboard />} /> 
             <Route path="admin" element={<Login/>}/>
             <Route path="/post-upload" element={<PostUpload/>}/>
        
        </Routes>
      </Router>
    </>
  );
}

export default App;
