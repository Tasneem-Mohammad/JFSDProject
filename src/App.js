import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import './styles.css'; // Make sure to import your CSS

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* Add a catch-all route for 404 errors */}
                <Route path="*" element={<h2>404 Not Found</h2>} />
            </Routes>
        </Router>
    );
};

export default App;
