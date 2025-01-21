import { FaHome } from "react-icons/fa";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import Grid from "./components/ui/Grid";
import RecentProjects from "./components/ui/RecentProjects";

export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    <div className=" max-w-7xl w-full">
      <FloatingNav
      navItems= {[
        {
          name: "Home",
          link: "/",
          icon:<FaHome/>

        }
      ]
      }
      />
       <Hero/>
       <Grid/>
       <RecentProjects/>
    </div>
   </main>
      
  );
}
