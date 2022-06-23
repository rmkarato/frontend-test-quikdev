import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;

  margin-left: 20%;
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

export const TextLink = styled.p`
  color: #000;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
  margin-bottom: 46px;
`;

export const Button = styled.button`
  width: 20%;
  outline: auto;
  cursor: pointer;
  padding: 10px 20px;
  background-color: #00A2A1;
  color: #fff;
  font-size: 16px;
  border-radius: 15px;

  &:hover {
    background-color: #555;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;
