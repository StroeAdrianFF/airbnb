import React from 'react';
import "./SearchPage.css";
import { Button } from '@material-ui/core';
import SearchResult from "./SearchResult.js";
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays - 26 august to 30 august - 2 guests</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult img='https://images.dwell.com/photos-6530128729933520896/6667590445825789952-medium/outsideinside-house.jpg'
                location='Single room in Osaka'
                title='Stay in this well decorated place'
                description='1 guest - 1 bedroom - 1 bed - 2 shared bathrooms - Wi-Fi - Kitchen - Smoke detector'
                star={4.8}
                price='€60/night'
                total='€240 total' />
            <SearchResult img='https://images.dwell.com/photos-6377070704335380480/6377071526107271168-medium/living-room.jpg'
                location='Single room in Ankara'
                title='Stay in this well decorated place'
                description='1 guest - 1 bedroom - 1 bed - 2 shared bathrooms - Wi-Fi - Kitchen - Smoke detector'
                star={4.8}
                price='€60/night'
                total='€240 total' />
            <SearchResult img='https://images.dwell.com/photos-6530128729933520896/6667590572455718912-medium/outsideinside-house.jpg'
                location='Single room in Bucharest'
                title='Stay in this well decorated place'
                description='1 guest - 1 bedroom - 1 bed - 2 shared bathrooms - Wi-Fi - Kitchen - Smoke detector'
                star={4.8}
                price='€60/night'
                total='€240 total' />
            <SearchResult img='https://i.pinimg.com/736x/35/3f/32/353f326f2091628670234951dbf3c517.jpg'
                location='Single room in London'
                title='Stay in this well decorated place'
                description='1 guest - 1 bedroom - 1 bed - 2 shared bathrooms - Wi-Fi - Kitchen - Smoke detector'
                star={4.8}
                price='€60/night'
                total='€240 total' />
            <SearchResult img='https://i.pinimg.com/originals/9e/40/8f/9e408feb50d41a3b316403d9abc9ab17.jpg'
                location='Single room in Barcelona'
                title='Stay in this well decorated place'
                description='1 guest - 1 bedroom - 1 bed - 2 shared bathrooms - Wi-Fi - Kitchen - Smoke detector'
                star={4.8}
                price='€60/night'
                total='€240 total' />
        </div>
    )
}

export default SearchPage
