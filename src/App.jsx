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
import Kisspetin from "./pages/Kisspetin";
import Retatrutide from "./pages/Retatrutide";
import Semaglutide from "./pages/Semaglutide";
import Tirzepatide from "./pages/Tirzepatide";
import AMINO from "./pages/5-AMINO";
import Melanotan from "./pages/Melanotan";
import MOTS_c from "./pages/MOTS";
import PT141 from "./pages/PT141";
import KPV from "./pages/KPV";
import Nad from "./pages/Nad+";
import CIC_1295 from "./pages/CIC_1295";
import Epithalon from "./pages/Epithalon";
import AOD_9604 from "./pages/AOD";
import Bac from "./pages/Bac";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";

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
          <Route path="/kisspetin" element={<Kisspetin />} />
          <Route path="/retatrutide" element={<Retatrutide />} />
          <Route path="/semaglutide" element={<Semaglutide />} />
          <Route path="/tirzepatide" element={<Tirzepatide />} />
          <Route path="/5-amino-1mq" element={<AMINO />} />
          <Route path="/melanotan" element={<Melanotan />} />
          <Route path="/mots-c" element={<MOTS_c />} />
          <Route path="/pt-141" element={<PT141 />} />
          <Route path="/kpv" element={<KPV />} />
          <Route path="/nad+" element={<Nad />} />
          <Route path="/cic-1295" element={<CIC_1295 />} />
          <Route path="/epithalon" element={<Epithalon />} />
          <Route path="/aod-9604" element={<AOD_9604 />} />
          <Route path="/bac-water" element={<Bac />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
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