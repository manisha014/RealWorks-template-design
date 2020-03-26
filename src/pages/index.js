import React from "react"
import Header from '../components/header/header';
import MainBanner from '../components/main-banner/main-banner';
import Features from '../components/features/features';
import Development from '../components/development/development';
import Testimonials from '../components/testimonials/testimonials';
import Subscribe from '../components/subscribe/subscribe';
import Footer from '../components/footer/footer';
import FAQ from '../components/FAQ/faq';
const page=()=>{
    return(
        <div>
            <Header></Header>
            <MainBanner></MainBanner>
            <Features />
            <Development></Development>
            <Testimonials></Testimonials>
            <Subscribe></Subscribe>
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    )
}

export default page;
