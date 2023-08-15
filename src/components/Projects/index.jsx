import { Container, Title,ButtonDiv } from "./styles";
import weatherApp from '../../assets/weather-app.png';
import gameApp from "../../assets/game.png"
import portfolioApp from "../../assets/portfolio-1.png"

const workExp = [
  {
    img: weatherApp,
    title: "Weather APP",
    language: "Javascript",
    repo_link: "https://github.com/LaraCosta66/weather-app",
    deploy_link: "https://weather-7tny2egzw-laracosta66.vercel.app/",
  },
  {
    img: gameApp  ,
    title: "Rock Paper Scissors Game",
    language: "Javascript",
    repo_link: "https://github.com/LaraCosta66/TOP-game",
    deploy_link: "https://game-ppt-top.netlify.app/",
  },
   {
     img: portfolioApp,
     title: "First Portfolio",
     language: "Javascript",
     repo_link: "https://github.com/LaraCosta66/LaraCosta-portfolio",
     deploy_link: "https://laracosta66.github.io/LaraCosta-portfolio/",
   },
];

export function Projects() {
    
  return (
    <Container id="projects">
      <Title>Projetos</Title>
      {workExp.map((project, index) => (
        <div className="content" key={index}>
          <div className="img-section">
            <img src={project.img} alt={project.nome} />
          </div>
          <div className="description">
            <h1>{project.title}</h1>
            <p className="lang">{project.language}</p>
            <section className="links">
            <ButtonDiv className="repo-btn-claro"><a href={project.repo_link}target="__blank"><p>Repositorio</p></a></ButtonDiv>
            <ButtonDiv className="repo-btn-claro"><a href={project.deploy_link} target="__blank"><p>Deploy</p></a></ButtonDiv>
            </section>
          </div>
        </div>
      ))}
    </Container>
  );
}
