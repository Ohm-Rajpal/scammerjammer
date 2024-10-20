"use client";
import { expressionColors, isExpressionColor } from "@/utils/expressionColors";
import { expressionLabels } from "@/utils/expressionLabels";
import { motion } from "framer-motion";
import { CSSProperties } from "react";

export default function Expressions({
  values,
  sender,
}: {
  values: Record<string, number>;
  sender: "user_message" | "assistant_message"; // Specify the sender type
}) {
  return (
    <div
      className={
        "text-xs p-3 w-full border-t border-border flex flex-col md:flex-row gap-3"
      }
    >
      {sender === "user_message" && values.anger > 0 && (
        <div className={"w-full overflow-hidden"}>
          <div
            className={"flex items-center justify-between gap-1 font-mono pb-1"}
          >
            <div className={"font-medium truncate"}>
              {expressionLabels.anger}
            </div>
            <div className={"tabular-nums opacity-50"}>
              {values.anger.toFixed(2)}
            </div>
          </div>
          <div
            className={"relative h-1"}
            style={{
              "--bg": isExpressionColor("anger")
                ? expressionColors.anger
                : "var(--bg)",
            } as CSSProperties}
          >
            <div
              className={
                "absolute top-0 left-0 size-full rounded-full opacity-10 bg-[var(--bg)]"
              }
            />
            <motion.div
              className={
                "absolute top-0 left-0 h-full bg-[var(--bg)] rounded-full"
              }
              initial={{ width: 0 }}
              animate={{
                width: `${Math.min(values.anger, 1) * 100}%`,
              }}
            />
          </div>
        </div>
      )}
      {sender === "assistant_message" && (
        <>
          {Object.entries(values).map(([key, value]) => (
            <div key={key} className={"w-full overflow-hidden"}>
              <div
                className={"flex items-center justify-between gap-1 font-mono pb-1"}
              >
                <div className={"font-medium truncate"}>
                  {expressionLabels[key]}
                </div>
                <div className={"tabular-nums opacity-50"}>
                  {value.toFixed(2)}
                </div>
              </div>
              <div
                className={"relative h-1"}
                style={{
                  "--bg": isExpressionColor(key)
                    ? expressionColors[key]
                    : "var(--bg)",
                } as CSSProperties}
              >
                <div
                  className={
                    "absolute top-0 left-0 size-full rounded-full opacity-10 bg-[var(--bg)]"
                  }
                />
                <motion.div
                  className={
                    "absolute top-0 left-0 h-full bg-[var(--bg)] rounded-full"
                  }
                  initial={{ width: 0 }}
                  animate={{
                    width: `${Math.min(value, 1) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
