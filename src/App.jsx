import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminPage from './pages/adminPage';
import LoginPage from './pages/loginPage';
import Testing from './pages/testing';
import { Toaster } from 'react-hot-toast';
import RegisterPage from './pages/client/register';
import HomePage from './pages/homePage';

function App() {
  
  return (
    <BrowserRouter>
    <Toaster position="top-right"/>
      <Routes path="/*">
        <Route path="/admin/*" element={<AdminPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/testing" element={<Testing/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/*" element={<HomePage/>}/>
        
       
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
