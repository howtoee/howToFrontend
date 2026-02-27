import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, children, className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300";

    if (to) {
        return (
            <Link to={to} className={`${baseStyles} ${className}`} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={`${baseStyles} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
