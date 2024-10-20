"use client";

import { cn } from "@/utils";
import { useVoice } from "@humeai/voice-react";
import Expressions from "./Expressions";
import { AnimatePresence, motion } from "framer-motion";
import { ComponentRef, forwardRef, useEffect, useState } from "react";

const Messages = forwardRef<ComponentRef<typeof motion.div>, { onMaxAngerChange: (maxAnger: number) => void }>(function Messages({ onMaxAngerChange }, ref) {
  const { messages } = useVoice();
  const [userEmotions, setUserEmotions] = useState<Record<string, number>>({ anger: 0 });
  const [assistantEmotions, setAssistantEmotions] = useState<Record<string, number>>({});

  useEffect(() => {
    messages.forEach((msg) => {
      if (msg.type === "user_message" && msg.models?.prosody?.scores) {
        const anger = msg.models.prosody.scores.anger || 0;
        setUserEmotions((prev) => {
          const newAnger = Math.max(prev.anger, anger);
          onMaxAngerChange(newAnger);
          return { ...prev, anger: newAnger };
        });
      }
    });
  }, [messages, onMaxAngerChange]);

  return (
    <motion.div layoutScroll className="grow rounded-md overflow-auto p-4" ref={ref}>
      <motion.div className="max-w-2xl mx-auto w-full flex flex-col gap-4 pb-24">
        <AnimatePresence mode="popLayout">
          {messages.map((msg, index) => {
            if (msg.type === "user_message" || msg.type === "assistant_message") {
              return (
                <motion.div
                  key={msg.type + index}
                  className={cn(
                    "w-[80%]",
                    "bg-card",
                    "border border-border rounded",
                    msg.type === "user_message" ? "ml-auto" : ""
                  )}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 0 }}
                >
                  <div className={cn("text-xs capitalize font-medium leading-none opacity-50 pt-4 px-3")}>
                    {msg.message.role}
                  </div>
                  <div className="pb-3 px-3">{msg.message.content}</div>
                  <Expressions
                    values={msg.type === "user_message" ? userEmotions : assistantEmotions}
                    sender={msg.type}
                  />
                </motion.div>
              );
            }
            return null;
          })}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
});

export default Messages;