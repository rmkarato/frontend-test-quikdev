import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 20%;
  height: 100vh;
`;

export const Button = styled.button`
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

export const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  font-size: 24px;
  margin-bottom: 42px;
  text-align: center;
`;

export const Text = styled.p`
  color: #969696;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;