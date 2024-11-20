import React from "react";
import { motion } from "framer-motion";

const Wrapper = ({ children }) => {
  return <span className="inline-block overflow-hidden">{children}</span>;
};

const AnimatedCharacters = ({ text, className="" }) => {
  const item = {
    hidden: { y: "200%", transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.55 }},
    visible: { y: 0, transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.45 } },
  };

  const words = text.split(" ").map((word) => word.split("").concat("\u00A0"));

  return (
    <div className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <Wrapper key={i}>
          {word.map((char, j) => (
            <motion.span
              className="inline-block"
              variants={item}
              key={j}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
        </Wrapper>
      ))}
    </div>
  );
};

export default AnimatedCharacters;
