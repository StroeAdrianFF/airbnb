import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card.js';

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className="home__section">
                <Card src='https://images.dwell.com/photos-6530128729933520896/6667590445825789952-medium/outsideinside-house.jpg'
                    description='Fastest and most secure way of renting a place'
                    title='Online experiences' />
                <Card src='https://images.dwell.com/photos-6377070704335380480/6377071526107271168-medium/living-room.jpg'
                    description='Cozy homes where no one can disturb you'
                    title='Entire homes' />
                <Card src='https://images.dwell.com/photos-6530128729933520896/6667590572455718912-medium/outsideinside-house.jpg'
                    description='Enjoy a unique experience with friends or family'
                    title='Unique stays' />
            </div>
            <div className="home__section">
                <Card
                    src="https://i.pinimg.com/736x/35/3f/32/353f326f2091628670234951dbf3c517.jpg"
                    title="3 Bedroom Flat in Amsterdam"
                    description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                    price="€130/night"
                />
                <Card
                    src="https://i.pinimg.com/originals/9e/40/8f/9e408feb50d41a3b316403d9abc9ab17.jpg"
                    title="Penthouse in Prague"
                    description="Enjoy the amazing sights of London with this stunning penthouse"
                    price="€350/night"
                />
                <Card
                    src="https://images.dwell.com/photos-6530128729933520896/6667590571257028608-medium/outsideinside-house.jpg"
                    title="1 Bedroom apartment"
                    description="Superhost with great amenities and a fabolous shopping complex nearby"
                    price="€70/night"
                />
            </div>
        </div>
    )
}

export default Home;
