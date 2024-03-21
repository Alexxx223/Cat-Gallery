import { Navbar } from "./components/Navbar";
import { Favourites } from "./pages/Favourites";
import { Home } from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/favourites" element={<Favourites/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
