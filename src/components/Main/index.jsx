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
          Admirador da tecnologia e blablablablablablabla, comecei a me
          interessar pelo meio desde pequeno quando jogava videogame. Hoje,
          procuro aprimorar meus conhecimentos em desenvolvimento de software,
          estou estudando Java. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Assumenda quia perferendis esse enim ipsum autem
          ducimus sint nobis. Voluptatem fuga aspernatur suscipit explicabo
          adipisci voluptatibus at voluptas reprehenderit quaerat! Ipsa.
        </p>
      </section>
    </Container>
  );
}
