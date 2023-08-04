import { Container } from "./styles";
import downloadIcon from "../../assets/download-box.svg";

export function Header() {
  return (
    <Container>
      <h3>Lara Costa</h3>
      <section className="list">
        <ul>
          <li>
            <a href="#about-me">About me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#edu">Education</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <span className="cv-section">
          <a
            href="https://drive.google.com/file/d/1b5dbjjqgRc6E547XpC-tpalMBv2eqprd/view?usp=sharing"
            target="__blank"
          >
            <img src={downloadIcon} alt="icone" />
          </a>
        </span>
      </section>
    </Container>
  );
}
