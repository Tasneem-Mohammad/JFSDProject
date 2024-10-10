import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; // Update this line


const Login = () => {
    return (
        <div className="container">
            <header>
                <div className="logo">
                    <img src="[Your Logo URL]" alt="PROF'X Logo" />
                </div>
                <nav>
                    <ul>
                        <li><Link to="/" className="active">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                        <li><Link to="/pricing">Pricing</Link></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className="login-section">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>LOGIN</h2>
                            <p>Welcome back! Please login to your account.</p>

                            <div className="login-form">
                                <form action="#">
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id="email" placeholder="Enter your email" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" id="password" placeholder="Enter your password" required />
                                    </div>
                                    <div className="form-options">
                                        <div className="remember-me">
                                            <input type="checkbox" id="remember" />
                                            <label htmlFor="remember">Remember Me</label>
                                        </div>
                                        <Link to="#">Forgot Password?</Link>
                                    </div>
                                    <button type="submit">Login</button>
                                    <button type="button" className="signup-btn">Sign Up</button>
                                </form>
                                <div className="social-login">
                                    <p>Or login with</p>
                                    <button type="button"><i className="fab fa-facebook-f"></i> Facebook</button>
                                    <button type="button"><i className="fab fa-linkedin-in"></i> LinkedIn</button>
                                    <button type="button"><i className="fab fa-google"></i> Google</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="" alt="Farming Image" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Login;
