import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: auto;
  padding: 40px;
  .text {
    width: auto;
    padding: 10px;
  }
  .text p {
    font-size: 1.3rem;
    font-weight: 300;
    color: var(--blue-800);
    margin-top: 10px;
  }

  .title {
    width: auto;
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--blue-800);
  }

  .image img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid #7282bf;
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    .image img {
      width: 200px;
      height: 200px;
    }
  }
`;
