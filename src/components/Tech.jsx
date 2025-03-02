import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div>
      <h1  className="text-center font-bold text-3xl mb-10">
        Computer Skill
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 p-5 ">
        {technologies.map((technology) => (
          <div
            className="hover:scale-105 bg-white shadow-lg transition-all"
            style={{ borderWidth: 1, padding: 10, borderRadius: 5 }}
          >
            <div
              className="w-[70px] h-12"
              style={{ display: "grid", placeItems: "center" }}
              key={technology.name}
            >
              <img
                src={technology.icon}
                style={{ height: 38, width: 45 }}
                alt="!"
              />
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "black",
                  fontSize:10
                }}
              >
                {technology.name}
              </p>
            </div>
          </div>
        ))}
        <div  id="languages" />
      </div>
      
    </div>
  );
};

export default SectionWrapper(Tech, "");
