import './App.css';

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/HomePage/About Us';
import OurMessage from './Components/HomePage/Our  Message';
import Ourfacilities from './Components/HomePage/Our Facilities ';
import Guidelines from './Components/HomePage/Guidelines';
import Whychoose from './Components/HomePage/Why Choose';
import Queries from './Components/HomePage/Queries';
import Footer from './Components/Footer';

const App = () => {
  return(
    <>
    <Navbar> </Navbar>
    <Home />
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
