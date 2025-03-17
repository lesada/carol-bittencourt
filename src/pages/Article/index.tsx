import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import useIsMobile from "@/hooks/useIsMobile";
import { useParams } from "react-router-dom";

import { useGetProject } from "@/api/functions/projects/get-project";
import DynamicContent from "@/components/DynamicContent";
import { Banner } from "./styles";

function Article() {
  const { id } = useParams();
  const { data: project } = useGetProject(id!);

  const isMobile = useIsMobile();

  return (
    <>
      <Banner>{project?.image && <img src={project?.image} alt="" />}</Banner>

      <Layout align="left" gap="medium">
        <Heading variant={isMobile ? "medium" : "x-large"} align="center">
          {project?.title.pt}
        </Heading>
        {project?.content.pt && (
          <DynamicContent content={project?.content.pt} />
        )}
      </Layout>
    </>
  );
}

export default Article;
