import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Layout from "./Layout/Layout";


import GHK_CU from "./pages/Ghk";
import SS_31 from "./pages/SS31";
import TB_500 from "./pages/TB500";
import Tesamorelin from "./pages/Tesamorelin";

import ScrollToTop from "./components/ScrollToTop";
import SLU_PP from "./pages/Slu";
import Ipamorelin from "./pages/Ipamorelin";
import Thymulin from "./pages/Thymulin";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/slu-pp-322" element={<SLU_PP />} />
          <Route path="/ghk-cu" element={<GHK_CU />} />
          <Route path="/ss-31" element={<SS_31 />} />
          <Route path="/tb-500" element={<TB_500 />} />
          <Route path="/tesamorelin" element={<Tesamorelin />} />
          <Route path="/ipamorelin" element={<Ipamorelin />} />
          <Route path="/thymulin" element={<Thymulin />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}