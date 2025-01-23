import Header from "./Header/Header";
import Topics from "./Topics/Topics";
import Info from "./Info/Info";
import Blog from "./Blog/Blog";
import PricingPlans from "./PricingPlans/PricingPlans";
import ContactFormWithMap from "./ContactFormWithMap/ContactFormWithMap";
import TrainerCarousel from "./TrainerCarousel/TrainerCarousel";
import Testimonials from "./Testimonials/Testimonials";
import WhyChooseUs from "./Why Choose Us/Why Choose Us";
import Footer from "./Footer/Footer";




fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
    console.log(response.json());
    response.then((result) => {
        console.log(result);
        
    })
})

fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
    return(response.json());
     
    })
    .then((result) => {
        console.log(result);
        
    })

export { Header, Topics, Info, Blog, Testimonials,PricingPlans,ContactFormWithMap,TrainerCarousel,WhyChooseUs, Footer};