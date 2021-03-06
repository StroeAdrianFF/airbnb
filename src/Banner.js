import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@material-ui/core'
import Search from './Search';
import { useHistory } from 'react-router-dom'

function Banner() {

    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className="banner__search">
                {showSearch && <Search />}


                <Button onClick={() => { setShowSearch(!showSearch) }} variant='outlined' className='banner__searchButton'>
                    {showSearch ? 'Show date picker' : 'Search dates'}
                </Button>
            </div>

            <div className="banner__info">
                <h1>Get out there traveling!</h1>
                <h5>Come explore the city!</h5>
                <Button variant='outlined' onClick={() => { history.push('/search') }}>Explore nearby</Button>
            </div>
        </div>
    )
}

export default Banner
