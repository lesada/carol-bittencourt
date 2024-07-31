import ProfilePicture1 from "@/assets/images/profile-1.png";
import ProfilePicture2 from "@/assets/images/profile-2.png";
import ProfilePicture3 from "@/assets/images/profile-3.png";
import Heading from "@/components/Heading";
import useIsMobile from "@/hooks/useIsMobile";

import { Section } from "../../styles";
import { Picture, Pictures, Text } from "./styles";

function About() {
  const isMobile = useIsMobile();

  return (
    <Section id="about">
      <Heading as="h3" variant={isMobile ? "large" : "xx-large"}>
        Sobre mim
      </Heading>
      <Pictures>
        <Picture>
          <img src={ProfilePicture1} alt="" />
        </Picture>
        <Picture>
          <img src={ProfilePicture2} alt="" />
        </Picture>
        <Picture>
          <img src={ProfilePicture3} alt="" />
        </Picture>
      </Pictures>

      <Text>
        UX/UI e Product Designer, com background em audiovisual, comunicação,
        marketing e design gráfico.
      </Text>

      <Text>
        Sou graduada em Comunicação Social (UFRN) e possuo MBA em UX Research,
        Operações de Pesquisa e Liderança em Design (UNIFATEC).
      </Text>

      <Text>
        Adoro realizar pesquisas para entender melhor o usuário e criar soluções
        que melhorem a vida das pessoas.
      </Text>
    </Section>
  );
}

export default About;
