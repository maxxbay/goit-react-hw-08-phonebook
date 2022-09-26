import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Title = styled(Link)`
  display: block;
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--main-text-color);
  padding-top: 20px;
  padding-bottom: 50px;
  text-align: center;
`;

export const TitleColor = styled.span`
  color: var(--accent-text-color);
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 270px;
  height: 40px;
  margin-bottom: 50px;
  margin: 0 auto;
  background-color: var(--accent-bg-color);
  color: var(--second-text-color);
  font-family: inherit;
  border: none;
  cursor: pointer;
  transition: background-color var(--main-hover-animation);
  :hover,
  :focus {
    background-color: var(--second-bg-color);
  }
`;

export const ButtonText = styled.span`
  margin-right: 10px;
`;
