import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./Pages/HomePage";
import LoginAuth from "./Security/loginAuth";
import SigninAuth from "./Security/signinAuth";
import axios from "axios"
import DashBoard from "./Pages/DashBoard";

axios.defaults.baseURL = "http://localhost:8000/api/"

const App = () => {
  return (
    <BrowserRouter>
      <Routes >
        <Route index element={<HomePage />} />
        <Route path="login/:userType" element={<LoginAuth />} />
        <Route path="signin/:userType" element={<SigninAuth />} />
        <Route path="dashboard" element={<DashBoard />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App;