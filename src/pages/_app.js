import App from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/components/GlobalStyle";
import Theme from "@/components/Theme";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
