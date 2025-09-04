import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from "./components/Home/Home.jsx";
import Destinations from './components/Destinations/Destinations.jsx'
/*import Crew from './components/Crew/Crew.jsx'
import Technology from './components/Technology/Technology.jsx'  

        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
        
*/
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
