import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Otp from "./pages/Otp";
import utils from "./utilities/utilities";

const App = () => {
  axios.defaults.baseURL = "https://cart-api.teamrabbil.com/api";
  const isAuth = utils.isLoggedIn();
  return isAuth ? (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  ) : (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="otp" element={<Otp />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
