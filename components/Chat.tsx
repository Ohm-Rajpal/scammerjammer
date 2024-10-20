"use client";

import { VoiceProvider } from "@humeai/voice-react";
import Messages from "./Messages";
import Controls from "./Controls";
import StartCall from "./StartCall";
import { ComponentRef, useRef, useState, useEffect } from "react";
import { resetMaxAngerAction } from "./action";

export default function Chat({ accessToken }: { accessToken: string }) {
  const timeout = useRef<number | null>(null);
  const ref = useRef<ComponentRef<typeof Messages> | null>(null);
  const [maxAnger, setMaxAnger] = useState(0);
  const [callStartTime, setCallStartTime] = useState<number | null>(null);
  const [callDuration, setCallDuration] = useState(0);

  // optional: use configId from environment variable
  const configId = process.env['NEXT_PUBLIC_HUME_CONFIG_ID'];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (callStartTime !== null) {
      interval = setInterval(() => {
        setCallDuration(Math.floor((Date.now() - callStartTime) / 1000));
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [callStartTime]);

  const handleCallStart = () => {
    setCallStartTime(Date.now());
    setCallDuration(0);
  };

  const handleCallEnd = () => {
    setCallStartTime(null);
  };

  return (
    <div className="relative grow flex flex-col mx-auto w-full overflow-hidden h-[0px]">
      <VoiceProvider
        auth={{ type: "accessToken", value: accessToken }}
        configId={configId}
        onMessage={() => {
          if (timeout.current) {
            window.clearTimeout(timeout.current);
          }
          timeout.current = window.setTimeout(() => {
            if (ref.current) {
              const scrollHeight = ref.current.scrollHeight;
              ref.current.scrollTo({
                top: scrollHeight,
                behavior: "smooth",
              });
            }
          }, 200);
        }}
      >
        <Messages ref={ref} onMaxAngerChange={setMaxAnger} />
        <Controls maxAnger={maxAnger} duration={callDuration} resetMaxAngerAction={resetMaxAngerAction} onCallEnd={handleCallEnd} />
        <StartCall onCallStart={handleCallStart} />
      </VoiceProvider>
    </div>
  );
}