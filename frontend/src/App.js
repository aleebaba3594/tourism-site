import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from './Components/Pages/login';
import Home from './Components/Pages/home';
import Nav from './Components/nav';
import Register from './Components/Pages/register';
import About from './Components/Pages/about';
import Stories from './Components/Pages/stories';
import Packages from './Components/Pages/packages';
import Booking from './Components/Pages/booking';
import Contact from './Components/Pages/contact';
import Profile from './Components/Pages/profile';
import Settings from './Components/Pages/settings';
import { Helmet,  HelmetData } from 'react-helmet-async';
import EmailCode from './Components/Pages/emailCode';
import Sure from './Components/sure';
import Verified from './Components/Pages/verified';
import BillingInfo from './Components/Pages/billingInfo';

const helmetData = new HelmetData({});
function App() {
  return (
    <div className="App">
      
      <Helmet helmetData={helmetData}>
        <title>Holiday Planet</title>
        <link rel="Holiday Planet" href="" />
      </Helmet>



      <Nav/>
      <BillingInfo/>
      {/* <Verified/> */}
      {/* <EmailCode/> */}
      {/* <Sure/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/stories" element={<Stories/>}/>
        <Route path="/packages" element={<Packages/>}/>
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/emailCode" element={<EmailCode/>}/>
        <Route path="/sure" element={<Sure/>}/>
        <Route path="/verified" element={<Verified/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
