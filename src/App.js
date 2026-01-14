import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Facilities from './Components/Facilities';
import Admission from './Components/Admission';
import SchoolEvents from './Components/SchoolEvents';
import Docs from './Components/Docs';
import ContactUs from './Components/ContactUs';

const App = () => {
  return(

    //Router Setup
   <BrowserRouter>

   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/AboutUs" element={<AboutUs />} />
    <Route path="/Facilities" element={<Facilities />} />
    <Route path="/Admission" element={<Admission />} />
    <Route path="/SchoolEvents" element={<SchoolEvents />} />
    <Route path="/Docs" element={<Docs />} />
    <Route path="/ContactUs" element={<ContactUs />} />
   </Routes>   
   
</BrowserRouter>
  )
}
export default App;
