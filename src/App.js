import styled, { ThemeProvider } from "styled-components";
import "./index.css";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Skills from "./components/Skills";

import { BrowserRouter } from "react-router-dom";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Contact from "./components/Contact";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background-color: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 200, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100%, 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar></Navbar>
        <Body>
          <Hero></Hero>
          <Wrapper>
            <Skills></Skills>
            <Services></Services>
            <Contact></Contact>
            <Projects></Projects>
          </Wrapper>
        </Body>
        <Footer></Footer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
