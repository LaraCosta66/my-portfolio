import { Container } from "./styles";
import githubLogo from "../../assets/github.svg";
import linkedinLogo from "../../assets/linkedin.svg";
import file from "../../assets/file.svg";
export function AboutMe() {
  return (
    <Container id="about-me">
      <h1>Sobre Mim</h1>
      <span className="txt">
        <p>
          Olá, eu sou a Lara, tenho 22 anos, e sou de São Paulo. Minha jornada
          tomou forma na Loft, onde comecei como Jovem Aprendiz. Minha paixão
          pelo desenvolvimento Front-end floresceu lá, me permitindo mergulhar
          de cabeça em tecnologias como ReactJS e Typescript. Durante esse
          período, também pude aprimorar minhas habilidades técnicas e adquirir
          um entendimento valioso da dinâmica de trabalho em um ambiente ágil.
          <br />
          Minha mais recente realização foi a conclusão do programa AWS Restart,
          uma parceria entre a Amazon Web Services e o ESPRO. Essa imersão na
          nuvem ampliou minha visão, e me levou à Certificação AWS Cloud
          Practitioner, consolidando meu entendimento dos fundamentos da AWS e
          expandindo meu conhecimento sobre nuvem. Já alcancei muito, mas a
          jornada está apenas começando. Com uma base sólida, estou ansiosa para
          enfrentar os próximos capítulos do meu percurso, sempre explorando,
          aprendendo e construindo um futuro brilhante na área de tecnologia.
          <br />
          
        </p>

        <p>
              Fique à vontade para entrar em contato comigo a qualquer momento.
              Estou ansiosa para trocar conhecimento e colaborar em projetos
              empolgantes!
          </p>
      </span>
      <div className="list-social">
        <span>
          <img src={githubLogo} alt="icone-github" />
          <a href="https://github.com/LaraCosta66" target="__blank">
            <p>Github</p>
          </a>
        </span>
        <span>
          <img src={linkedinLogo} alt="icone-linkedin" />
          <a href="https://www.linkedin.com/in/laracosta64/" target="__blank">
            <p>Linkedin</p>
          </a>
        </span>
        <span>
          <img src={file} alt="file-icon" />
          <a
            href="https://drive.google.com/file/d/1b5dbjjqgRc6E547XpC-tpalMBv2eqprd/view"
            target="__blank"
          >
            <p>CV</p>
          </a>
        </span>
      </div>
    </Container>
  );
}
