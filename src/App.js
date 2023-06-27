import React, { useState, Suspense, lazy } from 'react';
import './App.css';
import Navbar from './componetns/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './componetns/Loader';
import { ModalContext } from './context/ModalContext';
import Modal from './componetns/Modal';
import ServicesPage from './pages/ServicesPage';
const Homepage = lazy(() => import("./pages/Homepage"))
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
    </Routes>
    {modalOpen && <Modal />}
  </BrowserRouter>
  </ModalContext.Provider>

  );
}

export default App;
