import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function ProjectLayout() {
  return (
    <div>
      <Header/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
