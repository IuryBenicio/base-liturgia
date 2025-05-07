import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: white;
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  a {
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;
    img {
      width: 16px;
      margin-right: 2px;
    }
    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }
  span {
    display: flex;
    align-items: center;
  }
`;
