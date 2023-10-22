import styled from 'styled-components';

export const Container = styled.div`
    width: calc(100vw - 100px);
    height: 20px;
    padding: 20px 50px;
    background-color: #3498db;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled.div`
  font-size: 15px;
  color: white;
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  * {
  color: white;
  font-size: 16px;
  font-weight: bold;
}

  li {
    list-style: none;
    cursor: pointer; 
    
    a {
      text-decoration: none;     
    }
  }
`