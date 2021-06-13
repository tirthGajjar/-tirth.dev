import { motion } from "framer-motion";

// https://jarv.is/notes/css-waving-hand-emoji/
const WavingHand = () => {
  return (
    <motion.div
      style={{
        display: "inline-block",
        transformOrigin: "70% 70%",
      }}
      animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
      transition={{
        repeat: 7,
        repeatType: "mirror",
        duration: 2.5,
        delay: 0.5,
        ease: "easeInOut",
        type: "tween",
        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
      }}
    >
      <span role="img" aria-hidden="true" aria-label="hello">
        👋
      </span>
    </motion.div>
  );
};

export default WavingHand;
