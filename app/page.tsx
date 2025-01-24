import { FaHome } from "react-icons/fa";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import Grid from "./components/ui/Grid";
import RecentProjects from "./components/ui/RecentProjects";
import Clients from "./components/ui/Clients";
import Studies from "./components/ui/Studies"
import Footer from "./components/ui/Footer";
import Stack from "./components/ui/Stack";
export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5">
    <div className=" max-w-6xl w-full">
      <FloatingNav
      navItems= {[
        {
          name: "About",
          link: "#about",
          

        },
        {
          name: "Projects",
          link: "#projects",
          icon:<FaHome/>

        },
        {
          name: "Education",
          link: "#education",
          icon:<FaHome/>

        },
        {
          name: "Contact",
          link: "#contact",
          icon:<FaHome/>

        }
      ]
      }
      />
       <Hero/>
       <Grid/>
       <Stack/>
       <RecentProjects/>
       <Clients/>
       <Studies/>
       <Footer/>
    </div>
   </main>
      
  );
}
