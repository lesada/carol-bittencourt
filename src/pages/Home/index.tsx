import Card from "@/components/Card";
import Heading from "@/components/Heading";

import About from "./components/About";

import { Container, Section } from "./styles";

function Home() {
  return (
    <Container>
      <Section>
        <Heading variant="h1">Projetos</Heading>
        <Card />
      </Section>
      <About />
    </Container>
  );
}

export default Home;
