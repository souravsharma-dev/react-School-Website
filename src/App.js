import './App.css';
import Topbar from './Components/HomePage/Topbar';
import Hero from './Components/HomePage/Hero';
import AboutUs from './Components/HomePage/About Us';
import OurMessage from './Components/HomePage/Our  Message';
import Ourfacilities from './Components/HomePage/Our Facilities ';
import Guidelines from './Components/HomePage/Guidelines';
import Whychoose from './Components/HomePage/Why Choose';
import Queries from './Components/HomePage/Queries';
import Footer from './Components/HomePage/Footer';

const App = () => {
  return(
    <>
    <Topbar></Topbar>
    <Hero> </Hero>
    <AboutUs> </AboutUs>
    <OurMessage> </OurMessage>
    <Ourfacilities> </Ourfacilities>
    <Guidelines> </Guidelines>
    <Whychoose> </Whychoose>
    <Queries> </Queries>
    <Footer> </Footer>

    </>
  )
}
export default App;
