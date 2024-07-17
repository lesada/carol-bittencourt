import Heading from "@/components/Heading";

import { Section } from "../../styles";
import { Form } from "./styles";

function Contact() {
  return (
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
  );
}

export default Contact;
