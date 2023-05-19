import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";

export function Layout() {
  return (
    <main className="min-h-screen app-container flex flex-col justify-between gap-12">
      <div>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
