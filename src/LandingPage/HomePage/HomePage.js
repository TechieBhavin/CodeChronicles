import React from 'react';
import FeaturedBlogs from './FeaturedBlogs';
import CircleLayout from './CircleLayout';
import Home from './hero';
import "./hero.css";

function HomePage() {
    return <>
       <div className='hero'>
         <Home />
        <CircleLayout />
        <FeaturedBlogs />
       </div>
    </>
}

export default HomePage;