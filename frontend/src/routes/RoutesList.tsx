import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header';
import { useAuth } from '../context/AuthContext';
import { AddEmployee } from '../pages/AddEmployee';
import { AddEvent } from '../pages/AddEvent';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Register } from '../pages/Register';

export function RoutesList() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        {isAuthenticated ? <Route path='/' element={<Home />} /> : <Route path='/' element={<Navigate to="/login" />} />}
        {isAuthenticated  ? <Route path='/employee' element={<AddEmployee />} /> : <Route path='/employee' element={<Navigate to="/login" />} />}
        {!isAuthenticated ? <Route path='/login' element={<Login />} /> : <Route path='/login' element={<Navigate to="/" />} />}
        {!isAuthenticated && <Route path='/register' element={<Register />} />}
        {isAuthenticated  ? <Route path='/event' element={<AddEvent />} /> : <Route path='/event' element={<Navigate to="/login" />} />}
        {!isAuthenticated && <Route path='*' element={<Navigate to="/" />}  />}
      </Routes>
    </BrowserRouter>
  );
}
