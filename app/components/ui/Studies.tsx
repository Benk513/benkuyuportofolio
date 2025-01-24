import React from "react";
import { Timeline } from "./Timeline";



const Studies = () => {

  const data = [
    {
      title: "2022",
      content: (
        <div>
          <h2 className="text-purple font-semibold text-3xl mb-2">Bachelor&apos;s Degree in Computer Science</h2>
          <p className=" dark:text-neutral-100 text-xs md:text-sm font-normal mb-8">
            International Institute of Technologyy, Tunisia
          </p>
          <ul className=" text-white-100 ">
            <li>- Developed proficiency in JavaScript and Python programming languages.</li>
            <li>- Participated in coding competitions and hackathons, honing problem-solving skills.</li>
            <li>- Gained practical experience in applying theoretical knowledge to real-world problems.</li>
            <li>- Successfully completed several software development projects.</li>
            <li>- Demonstrated strong analytical and critical thinking skills.</li>
          </ul>          
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
         <h2 className="text-purple font-semibold text-xl lg:text-3xl mb-5">Diploma in Electronic </h2>
          <p className=" dark:text-neutral-100 text-xs md:text-sm font-normal mb-8">
            Kinshasa, Rd.Congo
          </p>
          <ul className=" text-white-100 ">
            <li>- Developed proficiency in JavaScript and Python programming languages.</li>
            <li>- Participated in coding competitions and hackathons, honing problem-solving skills.</li>
            <li>- Gained practical experience in applying theoretical knowledge to real-world problems.</li>
            <li>- Successfully completed several software development projects.</li>
            <li>- Demonstrated strong analytical and critical thinking skills.</li>
          </ul>
           
        </div>
      ),
    },
  ];
  return (
    <div className="w-full py-40  ">
      <Timeline data={data} />
    </div>
  );
}
export default Studies