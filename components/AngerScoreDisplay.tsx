import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { X, Clock, Thermometer } from "lucide-react";

interface AngerScoreDisplayProps {
  maxAnger: number;
  duration: number;
  onClose: () => void;
}

export default function AngerScoreDisplay({ maxAnger, duration, onClose }: AngerScoreDisplayProps) {
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full border border-purple-300 dark:border-purple-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-purple-700 dark:text-purple-300">Call Summary</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900">
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="space-y-6">
          <div>
            <div className="flex items-center mb-2">
              <Thermometer className="mr-2 text-purple-500" />
              <p className="font-semibold text-gray-800 dark:text-gray-200">Maximum Anger Score:</p>
            </div>
            <div className="text-4xl font-bold text-center text-purple-700 dark:text-purple-300">{(maxAnger * 100).toFixed(2)}%</div>
            <div className="h-4 bg-purple-100 dark:bg-purple-900 rounded-full overflow-hidden mt-2">
              <div
                className="h-full bg-purple-500"
                style={{ width: `${Math.min(maxAnger * 100, 100)}%` }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-2">
              <Clock className="mr-2 text-purple-500" />
              <p className="font-semibold text-gray-800 dark:text-gray-200">Conversation Duration:</p>
            </div>
            <div className="text-4xl font-bold text-center text-purple-700 dark:text-purple-300">{formatDuration(duration)}</div>
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
          This summary shows your highest detected anger level and the total duration of your conversation. 
          <p className="text-sm font-bold">Longer conversations with higher anger scores indicate better scam prevention skills.</p>
        </p>
      </div>
    </motion.div>
  );
}