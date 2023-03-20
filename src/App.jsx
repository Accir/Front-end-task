import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Checkout from "./pages/checkout/Checkout";
import { FOOTER_ITEMS, PRICE } from "./util/constants";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import { CHECKOUT_PATH } from "./util/paths";

function App() {
  return (
    <div className="font-serif bg-gray-200 h-full md:pb-12 pb-4 min-h-screen">
      <Header />
      <div className="container">
        <div className="bg-white m-4">
          <Routes>
            <Route exact path="/" element={<Landing />}></Route>
            <Route path={CHECKOUT_PATH} element={<Checkout price={PRICE} />}></Route>
          </Routes>
        </div>
        <Footer items={FOOTER_ITEMS} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
