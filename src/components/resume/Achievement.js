import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20 w-full"
    >
      <div className="flex justify-center  text-2xl w-full">
        Nothing
      </div>
    </motion.div>
  );
};

export default Achievement;
