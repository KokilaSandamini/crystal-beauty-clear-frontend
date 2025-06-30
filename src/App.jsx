import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminPage from './pages/adminPage';
import LoginPage from './pages/loginPage';
import Testing from './pages/testing';
import { Toaster } from 'react-hot-toast';
import RegisterPage from './pages/client/register';
import HomePage from './pages/homePage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ForgetPassword from './pages/client/forgetPassword';

function App() {
  
  return (
    <GoogleOAuthProvider clientId="225442060535-3j467ck0877lt8vpd76vji2nj0uppr40.apps.googleusercontent.com">
    <BrowserRouter>
    <Toaster position="top-right"/>
      <Routes path="/*">
        <Route path="/admin/*" element={<AdminPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/testing" element={<Testing/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/forget" element={<ForgetPassword/>}/>
        <Route path="/*" element={<HomePage/>}/>
        
       
        
      </Routes>
    </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
