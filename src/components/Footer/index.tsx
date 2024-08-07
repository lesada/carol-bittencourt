import { Link } from "react-router-dom";

import { Icons } from "@/assets/icons";
import Logo from "@/assets/icons/logo.svg";

import { Col, Container, ExternalLink, Home } from "./styles";

function Footer() {
  return (
    <Container>
      <Col>
        <p>Entre em contato</p>
        <ExternalLink>
          <Icons.Whatsapp />
          <a href="https://api.whatsapp.com/send/?phone=5584999046625">
            +55 84 99904-6625
          </a>
        </ExternalLink>
        <ExternalLink>
          <Icons.Whatsapp />
          <a href="mailto:carolbltcruz@gmail.com">carolbltcruz@gmail.com</a>
        </ExternalLink>
        <ExternalLink>
          <Icons.Whatsapp />
          <a href="https://www.linkedin.com/in/carolbitt/">
            Linkedin/carolbitt
          </a>
        </ExternalLink>
      </Col>
      <Col>
        <Link to={"/"}>
          <img src={Logo} alt="Logo do site" />
        </Link>
      </Col>
      <Col>
        <Home to={"/"}>Inicio</Home>
      </Col>
    </Container>
  );
}

export default Footer;
