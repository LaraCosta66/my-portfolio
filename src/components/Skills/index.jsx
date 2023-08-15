import { Container, Title } from "./styles";
import gitIcon from "../../assets/git.svg";
import jsIcon from "../../assets/javascript.svg";
import tsIcon from "../../assets/typescript.svg";
import awsIcon from "../../assets/aws.svg";
import javaIcon from "../../assets/java.svg";
import reactIcon from "../../assets/react.svg";
import linuxIcon from "../../assets/linux.svg";
import htmlIcon from "../../assets/html.svg";
import sassIcon from "../../assets/sass.svg";

const Items = [
  {
    skill: "Git",
    icon: gitIcon,
  },
  {
    skill: "SASS",
    icon: sassIcon,
  },
  {
    skill: "HTML",
    icon: htmlIcon,
  },

  {
    skill: "Javascript",
    icon: jsIcon,
  },
  {
    skill: "Typescript",
    icon: tsIcon,
  },
  {
    skill: "React",
    icon: reactIcon,
  },
  {
    skill: "AWS",
    icon: awsIcon,
  },
  {
    skill: "Java",
    icon: javaIcon,
  },
  {
    skill: "Linux",
    icon: linuxIcon,
  },
];
export function Skills() {
  return (
    <>
      <Title id="skills">Skills</Title>
      <Container>
        {Items.map((item, index) => (
          <div key={index} className="skills">
            <img src={item.icon} alt={item.skill} />
            <p>{item.skill}</p>
          </div>
        ))}
      </Container>
    </>
  );
}
