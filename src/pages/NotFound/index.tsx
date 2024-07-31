import { useNavigate } from "react-router-dom";

import { Icons } from "@/assets/icons";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import { PATHS } from "@/routes";

function NotFound() {
  const navigate = useNavigate();
  return (
    <Layout align="center" justify="center" gap="large">
      <Icons.NotFound />
      <Heading variant="x-small" align="center">
        Estamos tentando resolver esse problema! Tente novamente mais tarde.
      </Heading>
      <Button onClick={() => navigate(PATHS.HOME)}>Voltar ao início</Button>
    </Layout>
  );
}

export default NotFound;
