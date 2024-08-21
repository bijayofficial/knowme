import { animate, motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// calculate the recerse index for staggered delay

const reverseIndex = (index) => {
  let totalSteps = 6;
  return (totalSteps = index - 1);
};
const Stairs = () => {
  return (
    <>
      {/* render  6 motion divs, each representing a step of the stais,
    
    Each div will have the same animation defined  by the stairsAnimation object. 
    The delay of each object is calculated dinamically based on it's reversed index, 
    creating a staggered effect with decreasing delay for each subsequent step.
    */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-blue-400 relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
