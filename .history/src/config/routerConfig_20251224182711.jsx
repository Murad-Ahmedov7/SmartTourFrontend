
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Layout from "../components/layout/Layout";
import CustomizeTour from "../pages/customizeTour/CustomizeTour";
import SelectTour from "../pages/selectTour/SelectTour";
import ChooseTour from "../pages/chooseTour/ChooseTour";
import AboutTour from "../pages/aboutTour/AboutTour";
import Cart from "../pages/cart/Cart";
import PaymentPages from "../pages/paymentPages/PaymentPages";
import LiveTour from "../pages/liveTour/LiveTour";
import TravelMemories from "../pages/travelMemories/TravelMemories";
import Profile from "../pages/profile/Profile";
import Recommend from "../pages/recommend/Recommend";
import Community from "../pages/community/Community";
import Signup from "../pages/auth/Signup/Signup";
import Login from "../pages/auth/Login/Login";
import ForgotPassword from "../pages/auth/login/ForgotPassword";



const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/signup" element={<Signup/>}/>
      <Route path="/auth/login" element={<Login/>}/> 
      <Route path="/auth/login/forgotpassword" element={<ForgotPassword/>}/> 
      <Route element={<Layout />}>
        
        <Route path="/customizeTour" element={<CustomizeTour />} />
        <Route path="/selectTour" element={<SelectTour />} />
        <Route path="/chooseTour" element={<ChooseTour />} />
        <Route path="/aboutTour" element={<AboutTour />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<PaymentPages />} />
        <Route path="/live" element={<LiveTour />} />
        <Route path="/TravelMemories" element={<TravelMemories />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/community" element={<Community />} />
      </Route>
    </Routes>
  );
};

export default RouterConfig;