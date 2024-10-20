import { useVoice } from "@humeai/voice-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "./ui/button";
import { Phone } from "lucide-react";

interface StartCallProps {
  onCallStart: () => void;
}

export default function StartCall({ onCallStart }: StartCallProps) {
  const { status, connect } = useVoice();

  const handleStartCall = () => {
    connect()
      .then(() => {
        onCallStart(); // Call this function when the call successfully starts
      })
      .catch((error) => {
        console.error("Failed to start call:", error);
      });
  };

  return (
    <AnimatePresence>
      {status.value !== "connected" ? (
        <motion.div
          className={" inset-0 p-4 flex items-center justify-center pb-40"}
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{
            initial: { opacity: 0 },
            enter: { opacity: 1 },
            exit: { opacity: 0 },
          }}
        >
          <AnimatePresence>
            <motion.div
              variants={{
                initial: { scale: 0.5 },
                enter: { scale: 1 },
                exit: { scale: 0.5 },
              }}
            >
              <Button 
                className={"z-50 bg-purple-700 flex items-center gap-1.5"}
                onClick={handleStartCall}
              >
                <span>
                  <Phone
                    className={"size-4 "}
                    strokeWidth={2}
                    stroke={"currentColor"}
                  />
                </span>
                <span>Start Call</span>
              </Button>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}