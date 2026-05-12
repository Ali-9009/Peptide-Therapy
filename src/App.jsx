import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout/Layout";
import CJC1295 from "./pages/Cjc";
import GHK_CU from "./pages/Ghk";
import SS_31 from "./pages/SS31";
import TB_500 from "./pages/TB500";
import Tesamorelin from "./pages/Tesamorelin";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout Wrapper */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cjc-1295" element={<CJC1295 />} />
          <Route path="/ghk-cu" element={<GHK_CU />} />
          <Route path="/ss-31" element={<SS_31 />} />
          <Route path="/tb-500" element={<TB_500 />} />
          <Route path="/tesamorelin" element={<Tesamorelin />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;