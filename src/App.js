import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './Nav';
import Stack from './Stack';
import Queue from './Queue';
import Home from './Home';
import Palindrome from './Palindrome';
import Bubble from './Bubble';
import Footer from './Footer';
  
const App = () => {
  return (
    <BrowserRouter>
    
    <Nav />
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bubble" element={<Bubble />} />
      <Route path="/stack" element={<Stack />} /> 
      <Route path="/queue" element={<Queue />} />
      <Route path="palindrome" element={<Palindrome />}/>
    </Routes>
    <Footer />
    </BrowserRouter>

  );
}

export default App;
