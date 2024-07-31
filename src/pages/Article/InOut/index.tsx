import Heading from "@/components/Heading";
import Layout from "@/components/Layout";

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
  return (
    <>
      <Banner>
        <img src={BannerImage} alt="" />
      </Banner>

      <Layout align="left" gap="medium">
        <Heading variant="h1" align="center">
          InOut - Time Tracker
        </Heading>
        <Heading variant="h6">
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
        <Heading variant="h5">InOut - Time Tracker</Heading>
        <Text>
          A necessidade de pessoas autônomas em registrar sua jornada de
          trabalho não é de hoje. Mesmo sem a obrigatoriedade de um controle de
          horas é importante o profissional ter esse registro para poder
          contabilizar melhor seu serviço, ajustar valores, e, se necessário,
          apresentar ao tomador do serviço. Então, pensando nessa dor da cliente
          iniciamos o projeto com a criação da identidade visual e logotipo do
          aplicativo.
        </Text>
        <Heading variant="h5">UI Benchmarking</Heading>
        <Text>
          Concluída a fase inicial, pude realizar o benchmarking de UI e
          entender melhor os produtos já existentes no mercado. Conversei com a
          cliente para poder priorizar as funcionalidades que ela realmente iria
          utilizar e comecei o desenho da interface através de wireframes.
        </Text>
        <Heading variant="h5">Wireframes</Heading>
        <Text>
          Nessa etapa pude rascunhar as telas iniciais do produto para poder
          entender onde cada etapa da jornada ficaria melhor para o usuário
          usar.
        </Text>
        <Image>
          <img src={Wireframes} alt="" />
        </Image>
        <Heading variant="h5">Criando o protótipo</Heading>
        <Image $full>
          <img src={Prototype} alt="" />
        </Image>
        <Heading variant="h6">Alta Fidelidade</Heading>
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
          Acesse o <a href="/">protótipo</a>
        </Text>
        <Image>
          <img src={HighFidelity} alt="" />
        </Image>
      </Layout>
    </>
  );
}

export default InOut;
