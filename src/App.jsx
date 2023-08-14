import { AboutMe } from "./components/About";
import { ContactForm } from "./components/Contact";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Main/>
      <AboutMe/>
      <ContactForm/>
      <GlobalStyles />
    </>
  );
}
