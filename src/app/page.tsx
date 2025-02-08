"use client";

import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/Global";
import { defaultTheme } from "./styles/theme/default";
import { Especialidades } from "./components/Main";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Header />
        <Especialidades />
      </ThemeProvider>
    </>
  );
}
