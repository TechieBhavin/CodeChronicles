import React from 'react';
import FeaturedBlogs from './FeaturedBlogs';
import CircleLayout from './CircleLayout';
import FeaturedBlogs2 from './FeaturedBlogs2';
import Home from './hero';
import "./hero.css";


function HomePage() {
    return <>
       <div className='hero'>
         <Home />
        <CircleLayout />
        <FeaturedBlogs />
        <FeaturedBlogs2/>
       </div>
    </>
}

export default HomePage;