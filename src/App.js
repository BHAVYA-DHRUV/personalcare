import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/product";
import Testimonials from "./pages/testimonials";
import Inquiry from "./pages/inquiry";
import Contact from "./pages/contact";
import Login from "./pages/login";
import checkSession from "./auth/authService";
import { ToastContainer } from "react-toastify";
import Register from "./pages/register";
import Header from "./common/header";
import Footer from "./common/footer";
import CategoryProducts from "./pages/categoryProducts";
import ProductDetails from "./pages/productdetails";

function App() {
  const [isAuth, setAuth] = useState(false);
  const [isLoding, setLoading] = useState(false);

  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const checkAuth = await checkSession();
        console.log(checkAuth);

        if (checkAuth.isAuth) {
          setAuth(true);
        }
      } catch (error) {
        setAuth(false);
      } finally {
        setLoading(false); // Set loading to false after authentication check
      }
    };

    if (!isAuth) {
      authenticateUser(); // Check session only if user is not authenticated
    } else {
      setLoading(false); // Set loading to false immediately if user is authenticated
    }
  }, [isAuth]);
  useEffect(() => {
    window.scrollTo(0, 0, {
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <ToastContainer autoClose={1000} />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/testimonial" element={<Testimonials />} />
          <Route path="/inquiry/:id" element={<Inquiry />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category/:id" element={<CategoryProducts />} />
          <Route
            path="/login"
            element={!isAuth ? <Login /> : <Navigate to={"/"} />}
          />
          <Route
            path="/signup"
            element={!isAuth ? <Register /> : <Navigate to={"/"} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
