import React from 'react';
import {Header, Info, Topics, Blog, Testimonials, PricingPlans,ContactFormWithMap,TrainerCarousel,WhyChooseUs, Footer} from './components';

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
    <Footer />
    </>
  )
};

export default App;