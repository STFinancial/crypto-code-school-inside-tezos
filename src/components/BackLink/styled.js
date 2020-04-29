import styled from '@emotion/styled';

export const BackLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  text-decoration: none;
  font-size: 23px;
  line-height: 175%;
  margin: 10px;
  background: none;
  border: none;
  outline: none;

  > span {
    margin-left: 6px;
    display: inline-block;
  }

  > svg {
    display: inline-block;
    vertical-align: middle;
    margin-top: -2px;
  }

  :hover {
    cursor: pointer;
  }
`;
