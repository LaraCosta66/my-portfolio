import { styled } from "styled-components";

export const Container = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: #082449;

  h3 {
    font-size: 2rem;
    color: #fff;
    font-weight: 600;
  }

  .list a,
  li {
    list-style: none;
    text-decoration: none;
    color: #fff;
  }
  .list ul {
    display: flex;
    flex-direction: row;
    gap: 15px;
    font-size: 1.25rem;
    font-weight: 500;
    transition: 0.8s;
  }
  .list a:hover {
    background-color: var(--blue-100);
    padding: 5px;
    border-radius: 10px;
    color: var(--blue-800);
    font-weight: bold;
  }
  .cv-section {
    display: none;
  }

  @media (max-width: 550px) {
    display: flex;
    flex-direction: row;
    width: auto;
    height: 80px;
    padding: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--blue-900);

    .cv-section {
      display: block;
    }
    .cv-section img {
      width: 40px;
      height: 40px;
      color: #fff;
    }
    .list ul {
      display: none;
    }
    .cv-section a:hover {
      background: none;
    }
  }

  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 10px;
  }
  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
  }
`;
