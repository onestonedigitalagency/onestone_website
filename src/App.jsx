
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/Layout";
import Work from "./components/Work";
import About from "./components/About";
import NotFound from "./components/pages/NotFound";
import Home from "./components/Home";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>} />
          <Route path="works" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  
  );
}

export default App;