import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import First from "./first";
import SecondComponent from "./SecondComponent";
import ThirdCompoent from "./ThirdCompoent";
import FourthComponent from "./FourthComponent";
import AdminLayout from "./components/layout/AdminLayout";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Counter from "./pages/Counter";
import Homepage from "./pages/Homepage";
import ReduxCounter from "./components/redux/reduxCounter";
import GameDisplay from "./components/redux/gameDisplay";
import DataFetch from "./components/hooks/DataFetch";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<App/>}> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />

          <Route path="/first" element={<First />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="SecondComponent" element={<SecondComponent />} />
            <Route path="ThirdCompponent" element={<ThirdCompoent />} />
            <Route path="FourthCompponent" element={<FourthComponent />} />
          </Route>
        </Route>
        <Route path="counter" element={<Counter />} />
        <Route path="info" element={<Homepage />} />
        <Route path="reduxCounter" element={<ReduxCounter/>}/>
        <Route path="game" element={<GameDisplay/>}/>
        <Route path="DataFetch" element={<DataFetch/>}/>
      </Routes>
    </Router>
  );
};

export default MyRoutes;
