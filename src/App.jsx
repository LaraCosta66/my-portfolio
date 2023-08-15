import { AboutMe } from "./components/About";
import { ContactForm } from "./components/Contact";
import { Education } from "./components/Education";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Projects } from "./components/Projects";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Main/>
      <AboutMe/>
      <Education/>
      <Projects/>
      <ContactForm/>
      <GlobalStyles />
    </>
  );
}
