import { styled } from "styled-components";

export const Title = styled.h1`
  display: flex;
  justify-content: center;

  font-size: 2.5rem;
  color: #394453;
`;
export const Container = styled.div`
  background-color: var(--blue-200);
  padding: 20px;
  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 50px;
    gap: 30px;
    img {
      width: 700px;
      height: 350px;
    }
    .description {
      h1 {
        margin-bottom: 10px;
        color: #334155;
        font-weight: 400;
      }
      .lang {
        font-size: 1.25rem;
        font-weight: 200;
      }
    }
  }
  @media (max-width: 720px) {
    .content {
      flex-direction: column;
      align-items: flex-start;
      padding: 20px;
      gap: 15px;
      img {
        max-width: 360px;
        height: 250px;
      }
    }
    .description {
      h1 {
        font-size: 1.75rem;
      }
      .lang {
        font-size: 1rem;
      }
    }
  }
`;
export const ButtonDiv = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  margin: 10px 10px 0 0;

  a {
    text-decoration: none;
  }
  &.repo-btn-claro {
    background-color: #f3f7fe;
    border: none;
    border-radius: 8px;
    width: 100px;
    height: 45px;
    transition: 0.3s;
    p {
      color: #3b82f6;
      font-weight: 600;
    }
    &:hover {
      background-color: #3b82f6;
      box-shadow: 0 0 0 5px #3b83f65f;
      p {
        color: #fff;
      }
    }
  }
`;
