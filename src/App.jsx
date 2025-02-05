
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import './App.css';
import Layout from "./components/layout";
import Home from "./pages/home";
import Project from "./pages/projects";
import ACController from "./pages/projects/ac_controller";
import Aboutme from "./pages/aboutme";
import NotFound from "./pages/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Project />} />
        <Route path="projects/audio_controller" element={<ACController />} />
        <Route path="aboutme/*" element={<Aboutme />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
