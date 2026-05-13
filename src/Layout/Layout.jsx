import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
    const location = useLocation();

    return (
        <>
            <Header />

            <motion.div
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                    duration: 0.10,
                }}
            >
                <Outlet />
            </motion.div>

            <Footer />
        </>
    );
}