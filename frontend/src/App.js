import './App.css';
import {Route, Routes} from "react-router-dom";
import Login from './Pages/login';
import Home from './Pages/home';
import Nav from './Components/nav';
import Register from './Pages/register';
import About from './Pages/about';
import Stories from './Pages/stories';
import Packages from './Pages/packages';
import Booking from './Pages/booking';
import Contact from './Pages/contact';
import Profile from './Pages/profile';
import Settings from './Pages/settings';
import { Helmet,  HelmetData } from 'react-helmet-async';
import EmailCode from './Pages/emailCode';
import Sure from './Components/sure';
import Verified from './Pages/verified';
// import BillingInfo from './Pages/billingInfo';
import ForgotPassword from './Pages/forgotPassword';
import CheckResetOtp from './Pages/checkResetOtp';

const helmetData = new HelmetData({});
function App() {
  return (
    <div className="App">
      
      <Helmet helmetData={helmetData}>
        <title>Holiday Planet</title>
        <link rel="Holiday Planet" href="" />
      </Helmet>



      <Nav/>
      {/* <BillingInfo/> */}
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
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/checkResetOtp" element={<CheckResetOtp/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
