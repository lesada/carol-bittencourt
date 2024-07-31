import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import useIsMobile from "@/hooks/useIsMobile";

import BannerImage from "./assets/banner.png";
import Grid1 from "./assets/grid-1.png";
import Grid2 from "./assets/grid-2.png";
import Grid3 from "./assets/grid-3.png";
import Grid4 from "./assets/grid-4.png";
import HighFidelity from "./assets/high-fidelity.png";
import Prototype from "./assets/prototype.png";
import Wireframes from "./assets/wireframes.png";

import { Banner, Grid, Image, Text } from "../styles";

function InOut() {
  const isMobile = useIsMobile();

  return (
    <>
      <Banner>
        <img src={BannerImage} alt="" />
      </Banner>

      <Layout align="left" gap="medium">
        <Heading variant={isMobile ? "medium" : "x-large"} align="center">
          InOut - Time Tracker
        </Heading>
        <Heading as="h2" variant={"x-small"}>
          A ideia de um aplicativo para registrar as horas trabalhadas surgiu da
          necessidade de uma cliente de ter um controle de jornada eficiente
          para apresentar ao tomador de serviço.
        </Heading>
        <Grid>
          <Image>
            <img src={Grid1} alt="" />
          </Image>
          <Image>
            <img src={Grid2} alt="" />
          </Image>
          <Image>
            <img src={Grid3} alt="" />
          </Image>
          <Image>
            <img src={Grid4} alt="" />
          </Image>
        </Grid>
        <Heading variant={isMobile ? "x-small" : "small"}>
          InOut - Time Tracker
        </Heading>
        <Text>
          A necessidade de pessoas autônomas em registrar sua jornada de
          trabalho não é de hoje. Mesmo sem a obrigatoriedade de um controle de
          horas é importante o profissional ter esse registro para poder
          contabilizar melhor seu serviço, ajustar valores, e, se necessário,
          apresentar ao tomador do serviço. Então, pensando nessa dor da cliente
          iniciamos o projeto com a criação da identidade visual e logotipo do
          aplicativo.
        </Text>
        <Heading variant="small" as="h3">
          UI Benchmarking
        </Heading>
        <Text>
          Concluída a fase inicial, pude realizar o benchmarking de UI e
          entender melhor os produtos já existentes no mercado. Conversei com a
          cliente para poder priorizar as funcionalidades que ela realmente iria
          utilizar e comecei o desenho da interface através de wireframes.
        </Text>
        <Heading variant="small" as="h3">
          Wireframes
        </Heading>
        <Text>
          Nessa etapa pude rascunhar as telas iniciais do produto para poder
          entender onde cada etapa da jornada ficaria melhor para o usuário
          usar.
        </Text>
        <Image>
          <img src={Wireframes} alt="" />
        </Image>
        <Heading variant="small" as="h3">
          Criando o protótipo
        </Heading>
        <Image $full>
          <img src={Prototype} alt="" />
        </Image>
        <Heading variant="x-small" as="h4">
          Alta Fidelidade
        </Heading>
        <Text>
          Para dar início a Alta Fidelidade comecei a criação do Design System,
          usando as cores da marca como cores principais e a fonte Gotham para
          os textos. Criei os componentes e nesse processo vi a necessidade da
          criação dos temas light e dark mode do app.
        </Text>
        <Text>
          Pude explorar a funcionalidade de variáveis do Figma e criar a mudança
          de light para dark mode de forma mais simples e ágil, dando mais
          realismo ao protótipo. Também usei as variáveis para a criação dos
          Tokens de Cores, facilitando o trabalho da desenvolvedora que atuava
          no projeto.
        </Text>
        <Text>
          Acesse o{" "}
          <a
            href="https://www.figma.com/proto/PXCZCi1UoP4Ga0s7BlZjZa/InOut?page-id=118%3A1737&node-id=294-2692&viewport=328%2C553%2C0.19&t=aY3o7DMCa0wf5uqm-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=294%3A2692&show-proto-sidebar=1&fuid=897959988943437709"
            referrerPolicy="no-referrer"
          >
            protótipo
          </a>
        </Text>
        <Image>
          <img src={HighFidelity} alt="" />
        </Image>
      </Layout>
    </>
  );
}

export default InOut;
