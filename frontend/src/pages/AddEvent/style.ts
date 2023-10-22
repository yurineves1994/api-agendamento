import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
  color: #3788d8;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  margin: auto;
  padding: 15px;
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
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 5px;

  &:focus {
    outline: none;
    border-color: #3788d8;
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

export const BlockInputs = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-color: #3788d8;
  }
`;

export const ErrorText = styled.p`
  color: red;
  margin-top: 10px;
  font-size: 14px;
`;