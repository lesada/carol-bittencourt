import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import TestimonialPicture1 from "@/assets/images/testimonial-1.png";
import TestimonialPicture2 from "@/assets/images/testimonial-2.png";
import TestimonialPicture3 from "@/assets/images/testimonial-3.png";
import TestimonialPicture4 from "@/assets/images/testimonial-4.png";

import { Section } from "../../styles";
import { Author, Name, Picture, Testimonial, Text } from "./styles";

function Testimonials() {
  return (
    <Section>
      <Carousel showArrows={false} showStatus={false}>
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
              <img src={TestimonialPicture1} alt="" />
            </Picture>
            <Name>Sandra Yoshie | Zeropay</Name>
          </Author>
        </Testimonial>
        <Testimonial>
          <Text>
            A Carol é uma profissional super completa, proativa, dedicada e
            super aberta a ensinar e aprender, aprendi muito com ela. Foi
            maravilhoso termos trabalhado juntas em um projeto tão incrível,
            adoro seu trabalho e recomendo demais!
          </Text>
          <Author>
            <Picture>
              <img src={TestimonialPicture2} alt="" />
            </Picture>
            <Name>Julia Rosini | Trinus Tech</Name>
          </Author>
        </Testimonial>
        <Testimonial>
          <Text>
            Eu e a Carol trabalhamos no mesmo projeto voluntario que foi do
            Vagas UX juntamente com o Jovens UX & UI. Realizamos o projeto da
            ONG Kurumins, tivemos uma experiência maravilhosa. A Carol é uma
            pessoa extremamente dedicada e inteligente me ensinou muita coisa e
            sempre estava disposta a ajudar o grupo.
          </Text>
          <Author>
            <Picture>
              <img src={TestimonialPicture3} alt="" />
            </Picture>
            <Name>Silvia Nascimento | MJV</Name>
          </Author>
        </Testimonial>
        <Testimonial>
          <Text>
            Tive a oportunidade de trabalhar junto a Carol no projeto Inter My
            Finances e formamos uma excelente equipe. Uma profissional proativa,
            está sempre se atualizando na área e buscando gerar valor com suas
            entregas. Sabe trabalhar em equipe, dividir demandas e apoiar os
            colegas quando necessário. Aprendi muito com ela!
          </Text>
          <Author>
            <Picture>
              <img src={TestimonialPicture4} alt="" />
            </Picture>
            <Name>Carolina Kieling | MJV</Name>
          </Author>
        </Testimonial>
      </Carousel>
    </Section>
  );
}

export default Testimonials;
