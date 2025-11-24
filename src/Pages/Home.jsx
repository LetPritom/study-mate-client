import React, { useEffect, useState } from 'react';
import ImageSlider from '../Components/ImageSlider';
import axios from 'axios';
import PartnerCard from './PartnerCard';
import Works from './Works';
import Review from './Review';

const Home = () => {


    const [partners , setPartners] = useState([]);

    useEffect( () => {
        axios(`http://localhost:3000/partners`)
        .then((res) => {
            const ratingSort = res.data;
            const rated = ratingSort.sort((a,b) => b.rating - a.rating)
            setPartners(rated)
            console.log(res.data);
        })
    } , [])

    return (
        <div>
            <ImageSlider/>
            <h1 className='text-5xl text-center my-5 font-semibold text-[#d94f00] opacity-80 '>Top Study Partners</h1>
            

            <div className='top-rated px-5 w-10/12 mx-auto grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 space-y-5 my-10'>
                  {
                   partners.map((partner , index) => <PartnerCard key={index} partner={partner}></PartnerCard>)
                  }  
            </div>
            <Works></Works>
            <Review></Review>
        </div>
    );
};

export default Home;