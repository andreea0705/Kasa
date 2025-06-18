import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import Accomodation from "../pages/Accomodation";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/accomodation/:id" element={<Accomodation />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Router;

