import { Container, Content, Title } from "./styles";
import account from "../../assets/account.svg";
import email from "../../assets/email.svg";
import marker from "../../assets/map-marker.svg";
export function ContactForm() {
  return (
    <Container id="contact">
      <Title>Entre em contato</Title>
      <Content>
        <div className="contacts">
          <span>
            <h3>Contato</h3>
            <p>
              Ficou com alguma dúvida, ou quer saber mais sobre mim, me mande
              uma mensagem.
            </p>
          </span>
          <div className="list-contact">
            <span>
              <img src={account} alt="people-icon" />
              <p>Lara Costa</p>
            </span>
            <span>
              <img src={email} alt="email-icon" />
              <a href="mailto:larasamilacosta@gmail.com">
                larasamilacosta@gmail.com
              </a>
            </span>
            <span>
              <img src={marker} alt="map-marker" />
              <p>São Paulo, SP</p>
            </span>
          </div>
        </div>
        <form
          action="https://formsubmit.co/larasamilacosta@gmail.com"
          method="POST"
          className="form"
        >
          <div className="title-sb">
            <h1>Contato</h1>
            <p className="subtitle">
              Quer entra em contato, me mande uma mensagem.
            </p>
          </div>
          <input type="text" name="name" required placeholder="Nome" />
          <input type="email" name="email" required placeholder="Email" />
          <textarea
            name="textarea"
            id="message"
            cols="50"
            rows="10"
            placeholder="Mensagem"
            className="text-msg"
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </Content>
    </Container>
  );
}
