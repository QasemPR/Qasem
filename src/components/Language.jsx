import React from "react";
import { languages } from "../constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";


function Language() {
  return (
    
    <div>
      <h1 className="text-center font-bold text-3xl mb-10">Language Skill</h1>
      <div className="flex flex-row flex-wrap justify-center gap-10 mx-12 py-5 ">
        {languages.map((language) => (
      <Tilt key={language.name}>
          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            className="w-20 h-12 green-pink-gradient p-[5px] rounded-[10px]"
          >
            <div
              options={{
                max: 45,
                scale: 0,
                speed: 45,
              }}
              className="bg-white rounded-[10px] p-2 h-[37px] flex justify-evenly items-center flex-col"
            >
              <h3 className="text-black text-[14px] font-bold text-center">
                {language.name}
              </h3>
            </div>
          </motion.div>
        </Tilt>
        ))}
      </div>
    </div>
  );
}

export default Language;
