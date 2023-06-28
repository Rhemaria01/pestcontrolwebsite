import React, { useState, Suspense, lazy } from 'react';
import './App.css';
import Navbar from './componetns/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './componetns/Loader';
import { ModalContext } from './context/ModalContext';
import Modal from './componetns/Modal';
import Footer from './componetns/Footer';
const Homepage = lazy(() => import("./pages/Homepage"))
const ServicesPage = lazy(() => import('./pages/ServicesPage')) ;
const ContactUs = lazy(()=>import('./pages/ContactUs'))
function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [message,setMessage] = useState("");

  return (
  <ModalContext.Provider value={{modalOpen, message, setModalOpen,  setMessage}}>

  <BrowserRouter >
    <Navbar />
    <Routes>
    <Route path="/" element={<Suspense fallback={<Loader/>}><Homepage/></Suspense>}/>
    <Route path="/services" element={<Suspense fallback={<Loader/>}><ServicesPage/> </Suspense>}/>
    <Route path="/contact-us" element={<Suspense fallback={<Loader/>}><ContactUs /> </Suspense>}/>
    </Routes>
    <Footer/>
    {modalOpen && <Modal />}
  </BrowserRouter>

  </ModalContext.Provider>

  );
}

export default App;
