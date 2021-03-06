import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  margin-left: 20%;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 20px;
`;

export const CardContainer = styled.div`
  border: 1px solid #969696;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
  padding: 20px 40px;
  margin: 10px;
  flex: 30%;
  border-radius: 30px;

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
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  width: 30%;
  align-self: center;
  font-size: 16px;
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

export const PostTitle = styled.p`
  font-size: 22px;
  font-weight: bold;
`;

export const TextLink = styled.p`
  color: #000;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
`;

export const EditContainer = styled.div`
  displey: flex;
  align-self: flex-end;
`;