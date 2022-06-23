import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;

  margin-left: 20%;
`;

export const ProfileContainer = styled.div`
  display: flex;
`;

export const CommentsContainer = styled.div`
  margin: 10px 0 20px 50px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

export const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  width: 30%;
  align-self: center;
  font-size: 16px;
`;

export const TextLink = styled.p`
  color: #000;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
  margin-bottom: 46px;
`;

export const Text = styled.p`
  color: #000;
  font-size: 16px;
  margin: 0;
`;

export const TextComment = styled.p`
  color: #000;
  font-size: 16px;
  margin: 0;
  text-align: end;
`;

export const TextCommentEmail = styled.p`
  color: #969696;
  font-size: 16px;
  margin: 0 0 10px 0;
  text-align: end;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const CardContainer = styled.div`
  border: 1px solid #969696;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
  padding: 20px 40px;
  margin: 10px 30px;
  flex: 30%;
  border-radius: 30px;

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
`;