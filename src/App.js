// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import VetListPage from './pages/VetListPage';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Header />
      <div>
      
      <Routes>
        <Route path="/" element={<Home />}/>
       <Route path="/vets" element={<VetListPage />} />
       {/* <Route path="/emergency" element={<Reportform />} /> */}
      </Routes>
    </div>
    </div>
    </BrowserRouter>
  );  
}

export default App;
