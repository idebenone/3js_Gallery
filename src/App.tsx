import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoxCanvas from "./Components/BoxCanvas";
import Canvas from "./Components/Canvas";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Canvas />} />
          <Route path="/box" element={<BoxCanvas />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
