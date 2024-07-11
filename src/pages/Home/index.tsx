import { Icons } from "@/assets/icons";
import Card from "@/components/Card";
import Heading from "@/components/Heading";

import About from "./components/About";

import { Container, Form, Row, Section } from "./styles";

function Home() {
  return (
    <Container>
      <Section>
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
      <Section>
        <Heading variant="h2" align="center">
          Entre em contato comigo
        </Heading>

        <Form>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" />

          <label htmlFor="phone">Telefone</label>
          <input type="tel" id="phone" />

          <label htmlFor="message">Mensagem</label>
          <textarea id="message" />

          <button type="submit">Enviar</button>
        </Form>
      </Section>
    </Container>
  );
}

export default Home;
