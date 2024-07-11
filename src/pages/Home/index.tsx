import Card from "@/components/Card";
import Heading from "@/components/Heading";

import { Container, Section } from "./styles";

function Home() {
  return (
    <Container>
      <Section>
        <Heading variant="h1">Projetos</Heading>
        <Card />
      </Section>
    </Container>
  );
}

export default Home;
