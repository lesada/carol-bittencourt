import Heading from "@/components/Heading";
import useIsMobile from "@/hooks/useIsMobile";
import DOMPurify from "dompurify";

import { useGetAbout } from "@/api/functions/about/get-about";
import { Section } from "../../styles";
import { Picture, Pictures, TextWrapper } from "./styles";

function About() {
  const isMobile = useIsMobile();
  const { data } = useGetAbout();

  return (
    <Section id="about">
      <Heading as="h3" variant={isMobile ? "large" : "xx-large"}>
        Sobre mim
      </Heading>

      <Pictures>
        {Array.from({ length: 3 }, (_, i) => (
          <Picture key={i}>
            <img src={data?.images[i]} alt="" />
          </Picture>
        ))}
      </Pictures>
      {data?.pt && (
        <TextWrapper
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data?.pt) }}
        />
      )}
    </Section>
  );
}

export default About;
