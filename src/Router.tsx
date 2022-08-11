import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:number" element={<Post />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
