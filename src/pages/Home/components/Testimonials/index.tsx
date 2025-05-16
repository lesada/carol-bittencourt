import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useGetTestimonials } from "@/api/functions/testimonials/get-testimonials";
import { Section } from "../../styles";
import { Author, Name, Picture, Testimonial, Text } from "./styles";

function Testimonials() {
  const { data: testimonials } = useGetTestimonials();
  return (
    <Section>
      <Carousel showArrows={false} showStatus={false}>
        {testimonials?.map((testimonial) => (
          <Testimonial key={testimonial.id}>
            <Text
              dangerouslySetInnerHTML={{ __html: testimonial.content.pt }}
            />
            <Author>
              {testimonial.profileImage && (
                <Picture>
                  <img src={testimonial.profileImage} alt="" />
                </Picture>
              )}
              <Name>{testimonial.name}</Name>
            </Author>
          </Testimonial>
        ))}
      </Carousel>
    </Section>
  );
}

export default Testimonials;
