import { FaFile, FaPhone, FaToolbox, FaUser } from "react-icons/fa";
import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import Grid from "./components/ui/Grid";
import RecentProjects from "./components/ui/RecentProjects";
import Clients from "./components/ui/Clients";
import Studies from "./components/ui/Studies"
import Footer from "./components/ui/Footer";
import Stack from "./components/ui/Stack";
import About from "./components/ui/About";
export default function Home() {
  return (
   <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5">
    <div className=" max-w-6xl w-full">
      <FloatingNav
      navItems= {[
        {
          name: "About",
          link: "#about",
          icon:<FaUser/>

        },
        {
          name: "Projects",
          link: "#projects",
          icon:<FaToolbox/>

        },
        {
          name: "Education",
          link: "#education",
          icon:<FaFile/>

        },
        {
          name: "Contact",
          link: "#contact",
          icon:<FaPhone/>

        }
      ]
      }
      />
       <Hero/>
       <About/>
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
