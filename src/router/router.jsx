import { Routes, Route } from "react-router-dom";
import Content from "../pages/content";
import App from "../App";
import Clases from "../pages/clases";

export const router = (
  <Routes>
    <Route path="content" element={<Content />} />
    <Route path="/" element={<App />} />
    <Route path="clases" element={<Clases />} />
  </Routes>
);