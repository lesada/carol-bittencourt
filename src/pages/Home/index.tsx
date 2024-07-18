import { Icons } from "@/assets/icons";
import Card from "@/components/Card";
import Heading from "@/components/Heading";

import About from "./components/About";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

import { Container, Row, Section } from "./styles";

function Home() {
  return (
    <Container>
      <Section id="projects">
        <Heading variant="h1">Projetos</Heading>
        <Card />
      </Section>
      <About />
      <Section>
        <Heading variant="h2" align="center">
          Onde você pode ter visto meu trabalho
        </Heading>
        <Row>
          <Icons.Starta />
          <Icons.Sicredi />
          <Icons.Impulso />
          <Icons.Sbc />
        </Row>
      </Section>

      <Contact />

      <Testimonials />
    </Container>
  );
}

export default Home;
