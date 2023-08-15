import { styled } from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: #fff;
  font-size: 1.5rem;
  font-weight: 600;

  a {
    text-decoration: none;
    &:hover {
      color: blue;
    }
  }

  @media (max-width: 720px) {
    font-size: 1.25rem;
  }
`;
