"use client";

import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/Global";
import { defaultTheme } from "./styles/theme/default";
import { HeroSection } from "./components/Hero";
import { Especialidades } from "./components/Main";
import { About } from "./components/About";
import { Rodape } from "./components/Footer";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header /> 
        {/* <HeroSection/> */}
        {/* <Especialidades/> */}
        <About/>
        <Contact/>
        <Rodape />
      </ThemeProvider>
    </>
  );
}
