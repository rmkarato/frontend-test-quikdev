import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 20px 0 0 0;
  width: 20%;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const StyledLink = styled(Link)`
  display: block;
  color: #969696;
  padding: 8px 16px;
  text-decoration: none;
  width: 100%;


  &:focus {
    background-color: #00A2A1;
    border-radius: 15px;
    color: #fff;
    width: 100%;
  }

  &:active {
    background-color: #00A2A1;
    border-radius: 15px;
    color: #fff;
    width: 100%;
  }

  &:hover {
    background-color: #555;
    border-radius: 15px;
    color: white;
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 70%;
  align-self: center;
  margin: 20px 0;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const LiContainer = styled.div`
  display: flex;
  flex-direction: column;
`;