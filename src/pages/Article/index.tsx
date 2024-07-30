import { useParams } from "react-router-dom";

import InOut from "./InOut";

import NotFound from "../NotFound";

function Article() {
  const { id } = useParams();

  function getPage() {
    switch (id) {
      case "1":
        return <InOut />;
      default:
        return <NotFound />;
    }
  }

  return getPage();
}

export default Article;
