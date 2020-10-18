import React from 'react'
import logo from './logo.png';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import PublicIcon from '@material-ui/icons/Public';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <img className='header__icon' src={logo} alt="logo_image" />
            </Link>



            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>


            <div className="header__right">
                <p>Host your place</p>
                <PublicIcon />
                <MoreVertIcon />
                <Avatar />
            </div>


        </div>
    )
}

export default Header;
