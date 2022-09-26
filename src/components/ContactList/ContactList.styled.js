import styled from '@emotion/styled';

export const List = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  margin-bottom: 15px;
  :last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    width: calc((100% - 4 * 15px) / 2);
    margin: auto;
    text-align: center;
  }
  @media screen and (min-width: 1440px) {
    width: calc((100% - 20 * 10px) / 3);
    text-align: center;
  }
`;
