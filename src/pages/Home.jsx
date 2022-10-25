import React from 'react';
import Layout from '../components/layouts/Layout';
import Slider from '../components/Slider';
import Banner from './../components/Home/Banner';
import Category from './../components/Home/Category';
import TrendingProduct from './../components/Home/TrendingProduct';
import CountDown from './../components/Home/CountDown';
import OurProducts from './../components/Home/OurProducts';
import Testimonial from './../components/Home/Testimonial';
import QuickView from './../components/Home/QuickView';
import RecentNews from './../components/Home/RecentNews';
import Letter from './../components/Home/Letter';
import Brand from './../components/Home/Brand';

const Home = () => {
    return (
        <Layout>
            <Slider />
            <Banner />
            <Category />
            <TrendingProduct />
            <CountDown />
            <OurProducts />
            <Testimonial />
            <QuickView />
            <RecentNews />
            <Letter />
            <Brand />
        </Layout>
    );
};

export default Home;
