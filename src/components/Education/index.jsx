import { Container } from "./styles";
import badgeCP from "../../assets/badge-cloud-practitioner.png";
import awsLogo from "../../assets/logo-aws-restart.png";
import italoLogo from "../../assets/uniitalo-badge.png";


const EducationArr = [
  {
    img: awsLogo,
    nome: "AWS Re/start",
    link: "https://www.credly.com/badges/35831903-c640-4ec3-9263-e860321f56fb/public_url",
    ano: "Abr/2023 - Jul/2023",
    empresa: "AWS | Espro",
  },
  {
    img: badgeCP,
    nome: "AWS Cloud Practioner",
    link: "https://www.credly.com/badges/d91da8f5-e8d8-4dd3-83ff-77b4f3d6653f/public_url",
    ano: "Jul/2023",
    empresa: "AWS",
  },
  {
    img: italoLogo,
    nome: "Análise e Desenvolvimento de sistemas",
    link: "https://italo.com.br/",
    ano: "Fev/2020 - Dez/2023",
    empresa: "Centro Universitário Ìtalo-Brasileiro",
  },
];

export function Education() {
  return (
    <Container id="education">
      <h1>Formação de Acadêmica</h1>
      <div className="content">
        {EducationArr.map((formation, index) => (
          <div className="education" key={index}>
            <div className="bg-img">
              <img src={formation.img} alt={formation.nome} />
            </div>

            <section className="sec-text">
              <a href={formation.link} target="__blank">
                <h3>{formation.nome}</h3>
              </a>
              <p>{formation.empresa}</p>
              <p>{formation.ano}</p>
            </section>
          </div>
        ))}
      </div>
    </Container>
  );
}
