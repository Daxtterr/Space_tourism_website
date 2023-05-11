import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="moon" element={<Destination />}></Route>
      <Route path="commander" element={<Crew />}></Route>
      <Route path="launch" element={<Technology />}></Route>
    </Routes>
  );
}

export default App;
