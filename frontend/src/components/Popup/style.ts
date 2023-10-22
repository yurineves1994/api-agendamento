import styled from "styled-components";

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const PopupContent = styled.div`
  background: white;
  padding: 50px 20px 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  position: relative;
`;

export const CloseButton = styled.button`
  background: #007bff;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  position: absolute;
    right: 15px;
    top: 10px;

`;

export const InfoList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }

  strong {
    margin-right: 8px;
    font-size: 18px;
  }
  span {
    margin-right: 8px;
    font-size: 16px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  button {
    width: 50%;
    padding: 8px 16px;
    color: white;
    background-color: #007bff;
    border: transparent;
    border-radius: 4px;
    cursor: pointer;
  }
`