import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Settings from './components/Settings';
import NewGame from './components/NewGame';
import ErrorRoute from './components/ErrorRoute';
import About from './components/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />

          <Route path="/home" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path='/newgame' element={<NewGame />} />
          <Route path='/about' element={<About />} />


          <Route path='*' element={<ErrorRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
