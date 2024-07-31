import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import useIsMobile from "@/hooks/useIsMobile";

import Benchmarking from "./assets/benchmarking.png";
import Grid1 from "./assets/grid-1.png";
import Grid2 from "./assets/grid-2.png";
import Grid3 from "./assets/grid-3.png";
import Grid4 from "./assets/grid-4.png";
import HighFidelity from "./assets/high-fidelity.png";
import Impact from "./assets/impact.png";
import Prototype from "./assets/prototype.png";
import Solution from "./assets/solution.png";

import { Banner, Detach, Grid, Image, Legend, List, Text } from "../styles";

function SBC() {
  const isMobile = useIsMobile();

  return (
    <>
      <Banner>
        <img
          src="https://s3-alpha-sig.figma.com/img/47d6/bd1d/1afc74f188fa2fa078b741d9cee3c480?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YZZiEwXVjyz6I4MaROP6DvGJ3WKpySp9KM2Cbmz17bmc1ZcwxjZ6-nG6~MCUj0mbY7MEhfNYTuHoyryAA5kq3GanBQkXSuZfVxXQYXeyAooESkUSDjbr7DjHHnZhXDJXWcy~ku2N8b~eCXtKtH4onGKXufzKK5BnUgYOHu20VmhkjYp8uNR3XUTckYgKtQu4QzEnaizcDx7tZ5KkmOgUspzk4k8Q-E7x-DCnNT3lBDXByqqAsairIM0QM4u2foGnKKHgbMjgq46PvttRU6JQFHLxGEEbQuVgqyfzhufuP69zwae7CZyo1x4b-dMeXmlUFcPe-RETbcblSGqzR5pucA__"
          alt=""
        />
      </Banner>

      <Layout align="left" gap="medium">
        <Heading variant={isMobile ? "medium" : "x-large"} align="center">
          Site da Sociedade Brasileira de Computação
        </Heading>
        <Heading variant={"x-small"}>
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
        <Heading variant="small" as="h3">
          Sobre o projeto
        </Heading>
        <div>
          <Text>
            A Sociedade Brasileira de Computação (SBC) tem como missão principal
            fomentar a inclusão digital, estimular a pesquisa e o ensino na área
            de computação no Brasil, além de desempenhar um papel crucial na
            formação de profissionais da computação com um forte compromisso
            social.
          </Text>
          <Text $bold>
            Consciente da necessidade de aprimorar seu site, a Sociedade optou
            por realizar uma reformulação completa do mesmo. Nesse contexto,
            iniciei o processo de pesquisa com o objetivo de compreender as
            dificuldades enfrentadas pelos usuários e pela própria instituição
            em relação ao site atual, a fim de identificar oportunidades de
            melhoria e propor soluções eficazes.
          </Text>
        </div>
        <Heading variant="small" as="h3">
          Pesquisa
        </Heading>
        <Text>
          Durante o processo de desk research, pude analisar os dados do site,
          mapear as páginas com mais problemas, páginas quebradas, inexistentes
          e com informações desatualizadas.
        </Text>
        <Detach>
          A maioria dos usuários da SBC são associados e funcionários em busca
          de alguma informação, documentos ou eventos específicos. Com isso,
          criei 2 personas, uma sendo um associado mais antigo, professor
          universitário e outra sendo estudante que ainda não se associou à SBC.
        </Detach>
        <Text>
          Utilizei a <b>Matriz CSD</b> na documentação das informações
          descobertas e na priorização de soluções, também usei a Matriz de
          Impacto x Conhecimento para priorizar e elaborar hipóteses e seguir
          com as pesquisas.{" "}
          <a href="/">Acesse meu repositório de pesquisa aqui.</a>
        </Text>
        <Heading variant="x-small" as="h4">
          Pesquisa Qualitativa
        </Heading>
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
        <Heading variant="x-small" as="h4">
          Benchmarking
        </Heading>
        <Text>
          Como a SBC não possui concorrência, decidi fazer um benchmarking de UI
          e analisar algumas outras instituições que pudessem ser referência
          para o novo site da Sociedade.
        </Text>
        <Image $full $object="contain">
          <img src={Benchmarking} alt="" />
        </Image>
        <Heading variant="x-small" as="h4">
          Buscando a solução
        </Heading>
        <Text>
          Após analisar as matrizes e entrevistas, realizei a Matriz de Impacto
          x Esforço para entender por onde começar. Como a SBC não usa o Hotjar
          ou plataformas similares, utilizei também o plugin de inteligência
          artificial Attention Insight do Figma para aplicar o mapa de calor nas
          principais páginas do site atual e encontrar as áreas que chamam mais
          atenção do usuário.
        </Text>
        <Image $full $object="contain">
          <img src={Solution} alt="" />
          <Legend>
            Mapa de calor da página inicial, página de notícia e calendário de
            eventos. O plugin deu a porcentagem de clareza de cada página.
          </Legend>
        </Image>
        <Text>
          O plugin mostrou que as áreas que mais atraem o olhar no site eram o
          banner e o rodapé. Ele também deu a porcentagem de clareza e
          compreensão da página, sendo a de notícia, com a maior quantidade de
          texto, a que possui menor porcentagem. O próprio calendário de eventos
          (imagem 3) não chamava atenção suficiente aos usuários.
        </Text>
        <Heading variant="x-small" as="h4">
          Criando o protótipo
        </Heading>
        <Image $full>
          <img src={Prototype} alt="" />
        </Image>
        <Text>
          Usei como base o logotipo e MIV da marca, e a partir dessas cores
          desenvolvi o Design System do site. Para a tipografia escolhi a fonte
          Roboto por ser fácil de carregar na web e ter muitas variações, também
          é uma fonte mais séria e passa confiança. Padronizei os ícones e criei
          um novo favicon baseado no logotipo da Sociedade.{" "}
          <a href="https://www.figma.com/design/4isygQsXdPQMQgcYAmEx8q/SBC_Site?node-id=0-1&t=ajXfaonGmsB3euh5-0">
            Acesse o Design System aqui.
          </a>
        </Text>
        <Heading variant="x-small" as="h4">
          Alta Fidelidade
        </Heading>
        <div>
          <Text>
            Nessa etapa eu já havia mapeado os principais pontos de melhoria do
            site e pude criar tanto as telas desktop quanto mobile. O objetivo
            era criar um protótipo pronto para teste e assim validar algumas das
            principais mudanças.
          </Text>
          <Text>Seriam elas:</Text>
          <List>
            <li>
              <Text>Renovação/Nova Associação;</Text>
            </li>
            <li>
              <Text>Acesso aos eventos;</Text>
            </li>
            <li>
              <Text>Acesso aos documentos da organização;</Text>
            </li>
            <li>
              <Text>Página de contato para comentários/reclamações.</Text>
            </li>
          </List>
        </div>
        <Text>
          Acesse os protótipos{" "}
          <a
            href="https://www.figma.com/proto/4isygQsXdPQMQgcYAmEx8q/SBC_Site?page-id=918%3A1510&type=design&node-id=947-907&viewport=638%2C399%2C0.08&t=hVOd1LlUi0sCKWtb-1&scaling=scale-down&starting-point-node-id=947%3A907"
            referrerPolicy="no-referrer"
          >
            desktop
          </a>{" "}
          e
          <a
            href="https://www.figma.com/proto/4isygQsXdPQMQgcYAmEx8q/SBC_Site?page-id=302%3A909&type=design&node-id=302-910&viewport=323%2C651%2C0.18&t=rfFKJ7EaYnaH6LS4-1&scaling=scale-down&starting-point-node-id=302%3A910&mode=design&fuid=897959988943437709"
            referrerPolicy="no-referrer"
          >
            mobile.
          </a>
        </Text>
        <Heading variant="x-small" as="h5">
          Testando com o usuário
        </Heading>
        <Text>
          Para os testes selecionei 5 perfis diferentes, sendo 2 usuárias do
          site da SBC, 2 profissionais da área de computação que nunca usaram o
          site e uma leiga que também nunca acessou a página.{" "}
          <b>Para os testes utilizei a plataforma Maze.</b>
        </Text>
        <Image $full $object="contain">
          <img src={HighFidelity} alt="" />
          <Legend>
            A foto da usuária está embaçada para a proteção da imagem da mesma.
          </Legend>
        </Image>
        <Detach>
          Nos testes, percebi que mesmo tendo os eventos na página inicial, a
          maioria das pessoas procurava pelos eventos direto no menu. Com isso
          ajustei o menu de eventos para que ficasse mais claro o acesso à
          inscrição de eventos, facilitando esse caminho. <br />O botão de
          Associe-se em destaque mostrou bastante efetivo, assim como o acesso
          de documentos, que no site anterior ficava em um menu escondido.
          Também inseri um dropdown na página de Benefícios para que ela ficasse
          mais dinâmica e atrativa.
        </Detach>
        <Text>
          Por fim, realizei rodei novamente o plugin do mapa de calor para fazer
          um comparativo das páginas novas com as antigas.
        </Text>
        <Image $full $object="contain">
          <img src={Impact} alt="" />
          <Text>
            Com esse resultado e a validação dos testes, o site foi enviado para
            o desenvolvimento.
          </Text>
        </Image>
      </Layout>
    </>
  );
}

export default SBC;
