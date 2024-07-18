import { FormEvent } from "react";

import Heading from "@/components/Heading";

import { Section } from "../../styles";
import { Form } from "./styles";

function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { name, email, phone, message } = e.target as typeof e.target & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      phone: HTMLInputElement;
      message: HTMLInputElement;
    };

    const messageData = `Nome: ${name.value} \n \n E-mail: ${email.value} \n \n Telefone: ${phone.value} \n \n Mensagem: ${message.value}`;

    window.open(
      `https://api.whatsapp.com/send/?phone=5584999046625&text=${messageData}`
    );
  }

  return (
    <Section>
      <Heading variant="h2" align="center">
        Entre em contato comigo
      </Heading>

      <Form onSubmit={handleSubmit}>
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
