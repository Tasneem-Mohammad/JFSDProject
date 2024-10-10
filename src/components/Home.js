import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Update this line

const Home = () => {
    return (
        <div class="hero-section">
            <div class="content">
                <h1>FARM</h1>
                <p>Give the best services to the farmer</p>
                <div class="buttons">
                <nav>
                    <Link to="/login">Login</Link><br></br>
                    <Link to="/register">Register</Link>
                </nav>
                </div>
            </div>
        </div>
    );
};

export default Home;
