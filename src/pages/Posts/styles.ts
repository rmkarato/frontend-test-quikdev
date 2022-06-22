import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 50px;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 20px;
  margin: 10px;
  flex: 40%;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
`;

export const Text = styled.p`
display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical; 
`;


export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  width: 30%;
  align-self: center;
`;