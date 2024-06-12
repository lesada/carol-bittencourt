import { ThemeProvider } from "styled-components";

import Header from "./components/Header";

import theme from "./styles";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
