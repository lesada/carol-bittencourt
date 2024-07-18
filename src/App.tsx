import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./routes";

import theme from "./styles";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Routes />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
