import { Route, Routes as Router } from "react-router-dom";

import Article from "./pages/Article";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export const enum PATHS {
  HOME = "/",
  ARTICLE = "/article/:id",
}

function Routes() {
  return (
    <Router>
      <Route path={PATHS.HOME} element={<Home />} />
      <Route path={PATHS.ARTICLE} element={<Article />} />
      <Route path="*" element={<NotFound />} />
    </Router>
  );
}

export default Routes;
