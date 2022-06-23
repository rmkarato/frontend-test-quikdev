import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  margin-left: 20%;
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Text = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical; 
  font-size: 16px;
  margin: 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  color: #000;

  &:active {
    color: #000;
  }

  &:hover {
    color: #000;
  }
`;