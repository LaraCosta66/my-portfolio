import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: #eaf2fd;
  @media (max-width: 500px) {
    padding: 20px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  gap: 60px;
  .contacts {
    h3 {
      font-size: 2rem;
      font-weight: bold;
      color: var(--blue-800);
      margin-bottom: 5px;
    }
    p {
      font-size: 1rem;
    }
  }
  .list-contact {
    margin-top: 10px;
    p {
      font-size: 1.15rem;
      font-weight: 600;
      color: var(--blue-950);
    }
    a {
      font-size: 1.15rem;
      font-weight: 600;
      text-decoration: none;
      color: var(--blue-900);
    }
    img {
      width: 32px;
      height: 32px;
    }
    span {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 5px;
    }
  }
  .form {
    background-color: #15172b;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 20px;
    width: 600px;
    height: 400px;
    display: flex;
    flex-direction: column;
    h1 {
      color: #eee;
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .subtitle {
      display: none;
    }
    input,
    .text-msg {
      margin-bottom: 20px;
      background-color: #303245;
      border-radius: 12px;
      border: 0;
      color: #eee;
      font-size: 1.25rem;
      font-weight: 600;
      height: 50px;
      padding: 5px 10px;
      width: auto;
    }
    .text-msg {
      height: 200px;
      padding: 5px 10px 0;
    }
    button {
      background-color: #4a5989;
      border-radius: 12px;
      border: 0;
      color: #eee;
      cursor: pointer;
      font-size: 1.25rem;
      height: 60px;
      text-align: center;
      width: auto;
    }
    button:hover {
      background-color: #e7f0f8;
      color: #6374ae;
      border: #6374ae;
    }
    button:active {
      background-color: #4a5989;
      color: #f2f7fb;
    }
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
    .contacts {
      display: none;
      width: auto;
    }
    .list-contact {
      span {
        padding: 2px;
      }
    }
    .form {
      width: auto;
      height: auto;
      padding: 15px;
      .title-sb {
        margin-bottom: 10px;
        .subtitle {
          display: contents;
          font-size: 1.25rem;
          color: #eee;
        }
      }
      input,
      .text-msg {
        margin-bottom: 15px;
      }
    }
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 3rem;
  font-weight: 600;
  color: #334155;
`;
