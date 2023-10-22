import React from 'react'
import * as S from './style'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';

export const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <S.Container>
      <S.Logo>
        <h1>Agenda</h1>
      </S.Logo>
      <S.Menu>
        {isAuthenticated && <li><Link to="/">Agenda</Link></li>}
        {!isAuthenticated && <li><Link to="/login">Login</Link></li>}
        {isAuthenticated && <li><Link to="/employee">Cadastro Funcionario</Link></li>}
        {isAuthenticated && <li><Link to="/event">Fazer Agendamento</Link></li>}
        {isAuthenticated && <li onClick={handleLogout}>Logout</li>}
      </S.Menu>
    </S.Container>
  )
}
