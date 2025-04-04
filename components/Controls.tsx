"use client";

import { useVoice } from "@humeai/voice-react";
import { Button } from "./ui/button";
import { Mic, MicOff, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Toggle } from "./ui/toggle";
import MicFFT from "./MicFFT";
import { cn } from "@/utils";
import { useState, useEffect } from "react";
import AngerScoreDisplay from "./AngerScoreDisplay";

interface ControlsProps {
  maxAnger: number;
  duration: number;
  resetMaxAngerAction: () => void;
  onCallEnd: () => void;
}

export default function Controls({ maxAnger, duration, resetMaxAngerAction, onCallEnd }: ControlsProps) {
  const { disconnect, status, isMuted, unmute, mute, micFft } = useVoice();
  const [showAngerScore, setShowAngerScore] = useState(false);
  const [lastCallMaxAnger, setLastCallMaxAnger] = useState(0);
  const [lastCallDuration, setLastCallDuration] = useState(0);

  useEffect(() => {
    if (status.value === "disconnected" && maxAnger > 0) {
      setShowAngerScore(true);
      setLastCallMaxAnger(maxAnger);
      setLastCallDuration(duration);
    }
  }, [status, maxAnger, duration]);

  const handleEndCall = () => {
    disconnect();
    onCallEnd();
    // The useEffect above will handle showing the anger score
  };

  const handleCloseAngerScore = () => {
    setShowAngerScore(false);
    resetMaxAngerAction();
    // Force refresh the page
    window.location.reload();
  };

  return (
    <>
      <div
        className={cn(
          "fixed bottom-0 left-0 w-full p-4 flex items-center justify-center",
          "bg-gradient-to-t from-card via-card/90 to-card/0"
        )}
      >
        <AnimatePresence>
          {status.value === "connected" ? (
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              className="p-4 bg-card border border-border rounded-lg shadow-sm flex items-center gap-4"
            >
              <Toggle
                pressed={!isMuted}
                onPressedChange={() => {
                  if (isMuted) {
                    unmute();
                  } else {
                    mute();
                  }
                }}
              >
                {isMuted ? <MicOff className="size-4" /> : <Mic className="size-4" />}
              </Toggle>
              <div className="relative grid h-8 w-48 shrink grow-0">
                <MicFFT fft={micFft} className="fill-current" />
              </div>
              <Button className="flex items-center gap-1" onClick={handleEndCall} variant="destructive">
                <span>
                  <Phone className="size-4 opacity-50" strokeWidth={2} stroke="currentColor" />
                </span>
                <span>End Call</span>
              </Button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
      {showAngerScore && (
        <AngerScoreDisplay maxAnger={lastCallMaxAnger} duration={lastCallDuration} onClose={handleCloseAngerScore} />
      )}
    </>
  );
}