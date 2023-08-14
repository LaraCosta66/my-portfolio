import { styled } from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 30px;
  h1 {
    font-size: 2.5rem;
    color: #394453;
  }

  .content {
    display: flex;
    flex-direction: row;
    gap: 30px;

    .education {
      display: flex;
      flex-direction: column;
      width: 400px;
      height: 300px;

      .bg-img {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        height: 200px;
        width: 400px;

        img {
          max-width: 100%; /* Ocupa todo o espaço disponível */
          height: auto;
          max-height: 100%; /* Evita que a imagem ultrapasse a altura da div */
        }
      }
    }
  }
  .sec-text {
    padding: 10px;
    font-size: 1rem;
    font-weight: 400;
    color: #414e6e;
    a {
          color: #007bff; /* Cor do link padrão */
          text-decoration: none; /* Remove sublinhado padrão */

          &:hover {
            color: #0056b3; /* Cor do link ao passar o mouse */
          }

          &:active {
            color: #002d5a; /* Cor do link ao ser clicado */
          }
        }
  }
  @media (max-width:720px){
    height: auto;
    h1 {
    font-size: 2rem;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
   
  }
  .sec-text {
    font-size: 1.25rem;
}
}
`;
