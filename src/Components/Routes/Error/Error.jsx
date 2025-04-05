import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
    return (
        <div className="error-container">
            <div className="error-content">
                <h1 className="error-code">404</h1>
                <h2 className="error-message">Page Not Found</h2>
                <p className="error-description">
                    Oops! The page you're looking for seems to have vanished into the digital void.
                    Don't worry, even the best developers get lost sometimes.
                </p>
                <Link to="/" className="home-button">
                    Return Home
                </Link>
            </div>
        </div>
    );
};

export default Error; 