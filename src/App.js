import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import SideBar from "./components/SideBar/SideBar";
import Services from "./components/Services/Services";
import News from "./components/News/News";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import './App.css'
function App() {
  const [isTablet, setIsTablet] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleWindowResize() {
      if (getWindowSize().innerWidth < 1024) {
        console.log(getWindowSize());
        setIsTablet(true)
        setOpenSideBar(false)
      } else {
        setIsTablet(false)
      }

    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  const handleChange = () => {
    setOpenSideBar(false)
  }
  return (
    <div className="App">
      <div className="side-bar">
        {
          !isTablet ? <SideBar /> : openSideBar ? <SideBar openSideBar={openSideBar} handleChange={handleChange} /> : <button className="btn" onClick={() => { setOpenSideBar(true) }}>&#9776;</button>
        }

      </div>

      <div className="main-content">
        <div className="main-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/news" element={<News />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>

        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>


    </div>
  );
}

export default App;
