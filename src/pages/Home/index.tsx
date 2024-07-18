import { Icons } from "@/assets/icons";
import BannerMobile from "@/assets/videos/banner-mobile.mp4";
import Banner from "@/assets/videos/banner.mp4";
import Card from "@/components/Card";
import Heading from "@/components/Heading";
import useIsMobile from "@/hooks/useIsMobile";

import About from "./components/About";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

import { Container, Row, Section, Video } from "./styles";

function Home() {
  const isMobile = useIsMobile();

  return (
    <>
      <Video autoPlay loop muted playsInline>
        <source src={isMobile ? BannerMobile : Banner} type="video/mp4" />
      </Video>

      <Container>
        <Section id="projects">
          <Heading variant="h1">Projetos</Heading>
          <Card />
        </Section>
        <About />
        <Section>
          <Heading variant="h2" align={isMobile ? "center" : "left"}>
            Onde você pode ter visto meu trabalho
          </Heading>
          <Row>
            <Icons.Starta />
            <Icons.Sicredi />
            <Icons.Impulso />
            <Icons.Sbc />
          </Row>
        </Section>

        <Contact />

        <Testimonials />
      </Container>
    </>
  );
}

export default Home;
