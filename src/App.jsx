import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import Header from './components/Header';
import Home from './pages/Home';
// import SignIn from './pages/SignIn';
import Items from "./pages/products";
import  AdminProductManagement from "./pages/AdminPage";
import SignupForm from "./pages/SignUp";
// import Order from "./pages/checkout";
import ReviewList from "./pages/review";
import Profile from "./pages/Profile";
// import Home from "./pages/Home";
import  SignIn from "./pages/SignIn";
import Customers from './pages/Customer';

const App = () => {
  return (


    <Router>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/products" element={<Items />} />
        <Route path="/signup" element={<SignupForm/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/review" element={<ReviewList />} />
        <Route path="/AdminPage" element={<AdminProductManagement />}  />

        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/FAQ" element={<FAQ />} />
        <Route exact path="/RefundPolicy" element={<RefundPolicy />} />
        <Route exact path="/ShippingPolicy" element={<ShippingPolicy />} />
      </Routes>
      <Footer />

    </Router>
  );
};

export default App;
