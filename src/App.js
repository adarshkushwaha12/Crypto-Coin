import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Component/Header';
import Home from './Component/Home';
import Coins from './Component/Coins';
import Exchanges from './Component/Exchanges';
import Coindetails from './Component/Coindetails';
import Footer from './Component/Footer';

function App() {
  return (
    <div >
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/coins' element={<Coins />} />
          <Route path='/exchanges' element={<Exchanges />} />
          <Route path='/coin/:id' element={<Coindetails />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
