import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  background-color: #e6e6e6; 
`;

export const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
  color: #3788d8;
`;

export const Subtitle = styled.h3`
  font-size: 16px;
  text-align: center;
  margin-bottom: 30px;
  color: #3788d8;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const InputLabel = styled.label`
  margin-bottom: 10px;
  color: #3788d8;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-color: #4a90e2; 
  }
`;

export const Button = styled.button`
  padding: 12px;
  font-size: 18px;
  background-color: #3788d8;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2c6aa5;
  }
`;

export const ButtonRegister = styled(Link)`
padding: 12px;
  font-size: 18px;
  background-color: #3788d8;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #2c6aa5;
  }
`

export const Block = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 400px;
    margin: auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`