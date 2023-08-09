import { styled } from "styled-components";

export const Container = styled.div`
  background-color: var(--blue-200);
  padding: 40px;
  height: auto;
  h1 {
    color: #172554;
    margin-bottom: 10px;
  }
  .txt p {
    font-size: 1.5rem;
    font-weight: 300;
    color: var(--blue-950);
  }
  .list-social {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 5px;

    span {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    img {
      width: 36px;
      height: 36px;
    }
    a {
      text-decoration: none;
    }
    p {
      font-size: 1rem;
      color: var(--blue-900);
      font-weight: bold;
    }
  }
  @media (max-width: 600px) {
    padding: 20px;
    .txt p {
      font-size: 1.25rem;
      font-weight: bold;
    }
    .list-social {
      gap: 30px;
      img {
        width: 42px;
        height: 42px;
      }
    }
  }
`;
