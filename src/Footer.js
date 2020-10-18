import React from 'react';
import './Footer.css';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className='footer'>
            <p>© {year} Airbnb clone! No rights reserved - this is an interface demo! </p>

        </div>
    )
}

export default Footer
