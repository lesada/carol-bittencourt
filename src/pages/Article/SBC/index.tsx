import Heading from "@/components/Heading";
import Layout from "@/components/Layout";

import Benchmarking from "./assets/benchmarking.png";
import Grid1 from "./assets/grid-1.png";
import Grid2 from "./assets/grid-2.png";
import Grid3 from "./assets/grid-3.png";
import Grid4 from "./assets/grid-4.png";
import Prototype from "./assets/prototype.png";
import Solution from "./assets/solution.png";

import { Banner, Grid, Image, Text } from "../styles";

function SBC() {
  return (
    <>
      <Banner>
        <img
          src="https://s3-alpha-sig.figma.com/img/47d6/bd1d/1afc74f188fa2fa078b741d9cee3c480?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YZZiEwXVjyz6I4MaROP6DvGJ3WKpySp9KM2Cbmz17bmc1ZcwxjZ6-nG6~MCUj0mbY7MEhfNYTuHoyryAA5kq3GanBQkXSuZfVxXQYXeyAooESkUSDjbr7DjHHnZhXDJXWcy~ku2N8b~eCXtKtH4onGKXufzKK5BnUgYOHu20VmhkjYp8uNR3XUTckYgKtQu4QzEnaizcDx7tZ5KkmOgUspzk4k8Q-E7x-DCnNT3lBDXByqqAsairIM0QM4u2foGnKKHgbMjgq46PvttRU6JQFHLxGEEbQuVgqyfzhufuP69zwae7CZyo1x4b-dMeXmlUFcPe-RETbcblSGqzR5pucA__"
          alt=""
        />
      </Banner>

      <Layout align="left" gap="medium">
        <Heading variant="h1" align="center">
          Site da Sociedade Brasileira de Computação
        </Heading>
        <Heading variant="h6">
          A Sociedade Brasileira de Computação (SBC) é uma sociedade científica
          dedicada a promover o acesso à informação e à cultura por meio da
          informática. Durante esse projeto atuei nas pesquisas de Desk Research
          e Qualitativas para poder entender melhor as dificuldades dos usuários
          do site e quais as principais funcionalidades utilizadas.
          <br />
          Após analisar os dados e realizar a priorização dos problemas iniciei
          os rascunhos do redesign do site, iniciando com a baixa fidelidade,
          passando pela média e concluindo com a alta, com a qual pude testar
          com alguns usuários para ter a certeza de que o site estava acessível
          para o seu público.
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
        <Heading variant="h5">Sobre o projeto</Heading>
        <Heading variant="h6">
          A Sociedade Brasileira de Computação (SBC) tem como missão principal
          fomentar a inclusão digital, estimular a pesquisa e o ensino na área
          de computação no Brasil, além de desempenhar um papel crucial na
          formação de profissionais da computação com um forte compromisso
          social.
        </Heading>
        <Text>
          Consciente da necessidade de aprimorar seu site, a Sociedade optou por
          realizar uma reformulação completa do mesmo. Nesse contexto, iniciei o
          processo de pesquisa com o objetivo de compreender as dificuldades
          enfrentadas pelos usuários e pela própria instituição em relação ao
          site atual, a fim de identificar oportunidades de melhoria e propor
          soluções eficazes.
        </Text>
        <Heading variant="h5">Pesquisa</Heading>
        <Text>
          Durante o processo de desk research, pude analisar os dados do site,
          mapear as páginas com mais problemas, páginas quebradas, inexistentes
          e com informações desatualizadas.
        </Text>
        <Text>
          A maioria dos usuários da SBC são associados e funcionários em busca
          de alguma informação, documentos ou eventos específicos. Com isso,
          criei 2 personas, uma sendo um associado mais antigo, professor
          universitário e outra sendo estudante que ainda não se associou à SBC.
        </Text>
        <Text>
          Utilizei a <b>Matriz CSD</b> na documentação das informações
          descobertas e na priorização de soluções, também usei a Matriz de
          Impacto x Conhecimento para priorizar e elaborar hipóteses e seguir
          com as pesquisas.{" "}
          <a href="/">Acesse meu repositório de pesquisa aqui.</a>
        </Text>
        <Heading variant="h6">Pesquisa Qualitativa</Heading>
        <Text>
          Conversei com alguns associados e funcionários para entender melhor as
          dificuldades encontradas no site e validar as minhas hipóteses e
          começar o rascunho do protótipo.
        </Text>
        <Text>
          <b>
            Foi pontuada a dificuldade de encontrar alguns arquivos e
            documentos, da presença de um menu em uma localização escondida com
            ações pouco utilizadas e a dificuldade de acessar a página para se
            associar.
          </b>
        </Text>
        <Heading variant="h6">Benchmarking</Heading>
        <Text>
          Como a SBC não possui concorrência, decidi fazer um benchmarking de UI
          e analisar algumas outras instituições que pudessem ser referência
          para o novo site da Sociedade.
        </Text>
        <Image>
          <img src={Benchmarking} alt="" />
        </Image>
        <Heading variant="h6">Buscando a solução</Heading>
        <Text>
          Após analisar as matrizes e entrevistas, realizei a Matriz de Impacto
          x Esforço para entender por onde começar. Como a SBC não usa o Hotjar
          ou plataformas similares, utilizei também o plugin de inteligência
          artificial Attention Insight do Figma para aplicar o mapa de calor nas
          principais páginas do site atual e encontrar as áreas que chamam mais
          atenção do usuário.
        </Text>
        <Image>
          <img src={Solution} alt="" />
        </Image>
        <span>
          Mapa de calor da página inicial, página de notícia e calendário de
          eventos. O plugin deu a porcentagem de clareza de cada página.
        </span>
        <Text>
          O plugin mostrou que as áreas que mais atraem o olhar no site eram o
          banner e o rodapé. Ele também deu a porcentagem de clareza e
          compreensão da página, sendo a de notícia, com a maior quantidade de
          texto, a que possui menor porcentagem. O próprio calendário de eventos
          (imagem 3) não chamava atenção suficiente aos usuários.
        </Text>
        <Heading variant="h6">Criando o protótipo</Heading>
        <Image $full>
          <img src={Prototype} alt="" />
        </Image>
      </Layout>
    </>
  );
}

export default SBC;
