import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;

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

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;

  &:active {
    color: #fff;
  }

  &:hover {
    color: #fff;
  }
`;

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const CardContainer = styled.div`
  border: 1px solid #969696;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
  padding: 20px 40px;
  margin: 10px 50px;
  flex: 30%;
  border-radius: 30px;

  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical; 
  font-size: 16px;
  margin: 0;
  text-align: initial;
`;

export const TextTitle= styled.p`
  font-size: 16px;
  margin: 0;
  text-align: initial;
  width: 60%;
`;

export const ButtonEdit = styled.div`
  display: flex;
  flex-direction: column;
`;