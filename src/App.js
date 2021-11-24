import './App.css';
import Home from './Component/Pages/home';

import ContactUs from './Component/Pages/contactus';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import PageNotFound from './Component/Pages/404';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />

          <Route path="/contact" exact element={<ContactUs />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
