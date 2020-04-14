import React from "react";
import Header from '../components/header/header';
import MainBanner from '../components/main-banner/main-banner';
import Features from '../components/features/features';
import Development from '../components/development/development';
import Testimonials from '../components/testimonials/testimonials';
import Subscribe from '../components/subscribe/subscribe';
import FAQ from '../components/FAQ/faq';
import Footer from '../components/footer/footer';
import '../components/setting.scss';

    
const page=()=>{
    return(
        <div>
            <Header />
            <MainBanner />
            <Features />
            <Development />
            <Testimonials />
            <Subscribe />
            <FAQ />
            <Footer />
        </div>
    )
}

export default page;
