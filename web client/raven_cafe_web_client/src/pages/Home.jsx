import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.scss';
import { useDispatch } from 'react-redux';
import { updateNavIndex } from '../services/navIndexSlice';



const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateNavIndex(1));
    }, []);

    return (
        <div className='homeContainer'>
            <section id="banner">
                <div className="homeTopBanner">
                    <div className="info">
                        <p className="title">Welcome</p>
                        <p className="details">check today's best deals from our menu page</p>
                        <Link to={'/menu'} className='menuButton'>Today's Menu</Link>
                    </div>
                    <img src={'https://images.pexels.com/photos/11905186/pexels-photo-11905186.jpeg?cs=srgb&dl=pexels-liza-bakay-11905186.jpg&fm=jpg&w=3130&h=2075'} alt="home page top banner" />
                </div>
            </section>

            <section id="description">

            </section>
        </div>
    );
};

export default Home;