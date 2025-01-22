import React from 'react';
import {Header, Info, Topics, Blog, Testimonials, PricingPlans,ContactFormWithMap,TrainerCarousel,WhyChooseUs,video, Footer} from './components';

const App = () => {
  return (
    <>
    <Header />
    <Topics />
    <Info />
    <Blog />
    <Testimonials />
    <PricingPlans/>
    <ContactFormWithMap/>
    <TrainerCarousel/>
    <WhyChooseUs/>
    <video/>
    <Footer />
    </>
  )
};

export default App;