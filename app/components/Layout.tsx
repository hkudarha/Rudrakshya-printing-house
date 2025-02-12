import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

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
