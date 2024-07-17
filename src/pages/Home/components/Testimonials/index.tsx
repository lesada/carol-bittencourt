import { Carousel } from "react-responsive-carousel";

import { Section } from "../../styles";
import { Author, Name, Picture, Testimonial, Text } from "./styles";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Testimonials() {
  return (
    <Section>
      <Carousel showArrows={false} showIndicators>
        <Testimonial>
          <Text>
            Carol é uma profissional dedicada e está sempre disponível a ajudar
            todos ao seu redor. Tive a oportunidade de trabalhar junto com ela
            no projeto Inter My Finances e pude ver sua proatividade em sempre
            aprender mais, para gerar mais valor em suas entregas. Cada troca
            que tenho com ela é maravilhosa!
          </Text>
          <Author>
            <Picture>
              <img src="" alt="" />
            </Picture>
            <Name>Sandra Yoshie | Zeropay</Name>
          </Author>
        </Testimonial>
        <Testimonial>
          <Text>
            Carol é uma profissional dedicada e está sempre disponível a ajudar
            todos ao seu redor. Tive a oportunidade de trabalhar junto com ela
            no projeto Inter My Finances e pude ver sua proatividade em sempre
            aprender mais, para gerar mais valor em suas entregas. Cada troca
            que tenho com ela é maravilhosa!
          </Text>
          <Author>
            <Picture>
              <img src="" alt="" />
            </Picture>
            <Name>Sandra Yoshie | Zeropay</Name>
          </Author>
        </Testimonial>
        <Testimonial>
          <Text>
            Carol é uma profissional dedicada e está sempre disponível a ajudar
            todos ao seu redor. Tive a oportunidade de trabalhar junto com ela
            no projeto Inter My Finances e pude ver sua proatividade em sempre
            aprender mais, para gerar mais valor em suas entregas. Cada troca
            que tenho com ela é maravilhosa!
          </Text>
          <Author>
            <Picture>
              <img src="" alt="" />
            </Picture>
            <Name>Sandra Yoshie | Zeropay</Name>
          </Author>
        </Testimonial>
      </Carousel>
    </Section>
  );
}

export default Testimonials;
