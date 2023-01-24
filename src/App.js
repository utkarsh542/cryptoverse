import Coins from "./components/Coins";
import Coin from "./routes/Coin";
import NavBar from "./components/NavBar";
import {  Routes, Route } from "react-router-dom";
import'./index.css'

function App() {
  return (
    <>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Coins />} />
          <Route exact path="/coin" element={<Coin />}>
          <Route exact path=":coinId" element={<Coin />}/>
            </Route>
        </Routes>
  
    </>
  );
}

export default App;
