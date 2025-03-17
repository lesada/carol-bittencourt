import { Icons } from "@/assets/icons";
import BannerMobile from "@/assets/videos/banner-mobile.mp4";
import Banner from "@/assets/videos/banner.mp4";
import Card from "@/components/Card";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import useIsMobile from "@/hooks/useIsMobile";

import About from "./components/About";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

import { useGetProjects } from "@/api/functions/projects/get-projects";
import { Grid, Row, Section, Video } from "./styles";

function Home() {
  const isMobile = useIsMobile();
  const { data: projects } = useGetProjects();

  return (
    <>
      <Video autoPlay loop muted playsInline>
        <source src={isMobile ? BannerMobile : Banner} type="video/mp4" />
      </Video>

      <Layout>
        <Section id="projects">
          <Heading variant={isMobile ? "large" : "xx-large"}>Projetos</Heading>
          <Grid>
            {projects?.map((project) => (
              <Card key={project.id} {...project} title={project.title.pt} />
            ))}
          </Grid>
        </Section>
        <About />
        <Section>
          <Heading
            as="h3"
            variant={isMobile ? "medium" : "x-large"}
            align={isMobile ? "center" : "left"}
          >
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
      </Layout>
    </>
  );
}

export default Home;
