import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col">

            {/* Header */}
            <Header />

            {/* Page Content */}
            <main className="flex-1">
                <Outlet />
            </main>

            {/* <footer className="border-t py-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Your Brand
            </footer> */}

        </div>
    );
}