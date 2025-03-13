import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./routes";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import theme from "./styles";
import GlobalStyle from "./styles/global";

function App() {
  const queryClient = new QueryClient();
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Routes />
          <Footer />
        </ThemeProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
