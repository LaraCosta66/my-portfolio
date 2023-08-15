import { styled } from "styled-components";

export const Title = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  color: var(--blue-900);
  background-color: #e2e8f0;
`;
export const Container = styled.div`
  width: auto;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: #e2e8f0;

  .skills {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    background: #f8fafc;
    width: 150px;
    height: 100px;

    &:hover {
      border: 1px solid #d8d4d4;
      transform: scale(1.05);
      box-shadow: 0 8px 50px #23232333;
    }

    p {
      margin: 5px;
      font-size: 1rem;
      font-weight: bold;
      color: var(--blue-950);
    }
  }
  img {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 720px) {
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 10px;
    padding: 20px;
    .skills {
      width: 120px;
      height: 100px;
    }
  }
`;
