import { getHumeAccessToken } from "@/utils/getHumeAccessToken";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";

const Chat = dynamic(() => import("@/components/Chat"), {
  ssr: false,
});

export default async function Page() {
  const accessToken = await getHumeAccessToken();

  if (!accessToken) {
    throw new Error();
  }
  // <Button 
  //               className={"z-50 bg-purple-700 flex items-center gap-1.5"}
  //               onClick={handleStartCall}
  //             ></Button>

  return (
    <>

    

    <div className={"bg-white [background:radial-gradient(125%_125%_at_50%_50%,#fff_40%,#63e_100%)] grow flex flex-col"}>
          
    <div className="max-w-6xl mx-auto px-4 pt-5">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4 animate-pulse">
            Try Us Now!
          </h1>
          <p className="text-xl text-purple-400">
            Experience our cutting-edge AI chat assistant in real-time
          </p>
        </header>

       

        <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Clock className="mr-2" /> How It Works
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Click the "Start Call" button below to begin your conversation.</li>
            <li>Speak naturally with our AI assistant.</li>
            <li>Our system analyzes your conversation in real-time.</li>
            <li>End the call to see a summary of your interaction.</li>
          </ol>
        </div>

        <div className="bg-purple-800 bg-opacity-50 rounded-lg p-4 mb-8 text-center">
          <p className="text-sm">
            Note: This demo uses voice recognition. Please ensure your microphone is enabled.
          </p>
        </div>

        
      </div>
      <Chat accessToken={accessToken} />
    
      
    </div>
    </>


  );
}
