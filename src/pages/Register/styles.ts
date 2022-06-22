import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: center;
`;

export const RegisterContainer = styled.div`
  width: 400px; 
`;

export const Form = styled.form`
  display: flex;
  border: 1px solid #ddd;
  flex-direction: column;
  padding: 20px;
`;

export const Button = styled.button`
  padding: 10px;
`;

export const Input = styled.input`
  margin: 15px 0;
  padding: 10px;
`;

export const Error = styled.p`
  color: red;
  font-weight: bold;
`;