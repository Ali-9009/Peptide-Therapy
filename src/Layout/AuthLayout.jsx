import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function AuthLayout() {
    const location = useLocation();

    return (
        <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
        >
            <Outlet />

        </motion.div>
    );
}