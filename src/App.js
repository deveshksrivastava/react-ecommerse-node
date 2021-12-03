import './App.css';
import Home from './Component/Pages/home';
import AdminLogin from './Component/Admin/adminlogin';
import AdminDashboard from "./Component/Admin/admindashboard";
import ContactUs from './Component/Pages/contactus';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PageNotFound from './Component/Pages/404';

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/adminlogin" exact element={<AdminLogin />} />
          <Route path="/admindashboard" exact element={<AdminDashboard />} history={props.history} />
   

          <Route path="/contact" exact element={<ContactUs />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
