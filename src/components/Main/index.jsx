import { Container } from "./styles";
import profilePic from "../../assets/profile-pic.jpg";

export function Main() {
  return (
    <Container>
      <span className="image">
        <img src={profilePic} alt="pic-profile" />
      </span>
      <section className="text">
        <h1 className="title">
          Olá, seja bem vindo(a) ao meu Portfólio, me chamo Lara Costa e sou
          desenvolvedora Front-End.
        </h1>
        <p>
          Sou apaixonada por tecnologia, e estou buscando constantemente expandir
          meus horizontes nessa área. A abordagem prática sempre foi
          meu ponto forte, e aprendo muito mais aplicando do que apenas lendo. A
          aprendizagem contínua é minha âncora, e meu foco é crescer
          profissionalmente, aproveitando cada oportunidade para aprimorar minha
          capacidade de enfrentar desafios tecnológicos complexos.
        </p>
      </section>
    </Container>
  );
}
