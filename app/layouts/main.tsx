import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProjectLayout() {
  return (
    <div className="bg-white">
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
