import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20%;
  height: 100vh;
`;

export const LoginContainer = styled.div`
  width: 400px; 
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

export const Button = styled.button`
  outline: auto;
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  background-color: #00A2A1;
  color: #fff;
  border-radius: 15px;

  &:hover {
    background-color: #555;
  }
`;

export const Input = styled.input`
  margin: 15px 0;
  padding: 10px;
`;

export const Error = styled.p`
  color: red;
  font-weight: bold;
`;

export const Text = styled.p`
  color: #969696;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;