import { Routes, Route, useRoutes } from "react-router-dom";
import Home from "./components/home";
import routes from "./tempo-routes";

function App() {
  return (
    <div className="app">
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
