import Link from "next/link";
import Image from "next/image";
import scamimg from "@/assets/scammerimg.png";
import {HelpCircle } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen max-w-content-width flex flex-col bg-white [background:radial-gradient(125%_125%_at_50%_50%,#fff_40%,#63e_100%)]">
      <div className="mx-auto max-w-content-width px-4 flex flex-col">
        
        {/* Main Section */}
        <section className="min-h-fit flex flex-col lg:flex-row items-center text-center lg:text-left px-4 pt-40 pb-10 gap-10">
          <div className="flex-1 lg:pl-16 xl:pl-24 pb-10">
            <h1 className="animate-in fade-in-5 duration-1000 ease-in text-6xl font-bold text-gray-800 mb-6">
              Beating Scammers At Their Own Game.
            </h1>
            <p className="animate-in fade-in-5 duration-1000 ease-in text-xl text-gray-600 mb-8">
              Take control of your phone! Waste the scammers' time, not yours. We engage them so you don't have to.
            </p>
            <div className="animate-in fade-in-5 duration-1000 ease-in flex justify-center lg:justify-start gap-4">
              <Link href="/about" className="text-blue-600 border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white transition">
                Learn More
              </Link>
              <Link href="/tryusnow" className="text-gray-800 border border-gray-800 px-6 py-3 rounded-md hover:bg-gray-800 hover:text-white transition">
                Try Us Now
              </Link>
            </div>  
          </div>
          <div className="flex-1">
            <Image 
              src={scamimg} 
              alt="Scammer Image" 
              className="rounded-3xl w-full max-w-xs lg:max-w-xl mx-auto"
              priority={true}
            />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-10 pb-40">
          <h2 className="text-3xl font-semibold pt-40 pb-10 text-gray-800 text-center mb-8">
            How Does Scammer Jammer Work
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="max-w-sm shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 ">Identify Scammers</h3>
              <h3 className="text-xl  text-gray-800 mb-4">(Coming Soon)</h3> 
              <p className="text-gray-600">
                Using Hume AI, we analyze conversations to detect emotional patterns associated with scams. Once verified, we engage with the scammer.
              </p>
            </div>
            <div className="max-w-sm shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Engage and Waste Their Time</h3>
              <p className="text-gray-600">
                After identifying scammers, our AI-driven system keeps them engaged in long conversations, preventing them from targeting others.
              </p>
            </div>
            <div className="max-w-sm shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Comprehensive Protection</h3>
              <p className="text-gray-600">
                We use advanced AI-powered analysis to handle scam calls for you, ensuring minimal interaction while maximizing disruption to scammers.
              </p>
            </div>
          </div>
        </section>

        {/* Idk maybe we can add this later */}
        {/* <section className="w-full py-12 bg-gray-50 rounded-lg">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            What Our Users Say
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "John D.", quote: "Scammer Jammer has saved me countless hours and potential financial losses. It's a game-changer!" },
              { name: "Sarah M.", quote: "I feel so much more secure knowing Scammer Jammer is protecting my phone lines. Highly recommended!" },
              { name: "Robert L.", quote: "The peace of mind this service provides is priceless. No more stress from scam calls!" },
            ].map((testimonial, index) => (
              <div key={index} className="max-w-sm bg-white shadow-md rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Star className="text-yellow-400 w-5 h-5" />
                  <Star className="text-yellow-400 w-5 h-5" />
                  <Star className="text-yellow-400 w-5 h-5" />
                  <Star className="text-yellow-400 w-5 h-5" />
                  <Star className="text-yellow-400 w-5 h-5" />
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <p className="text-gray-800 font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </section> */}



        <section className="w-full py-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {[
              { q: "How does Scammer Jammer work?", a: "Scammer Jammer uses Hume AI to engage with potential scammers, wasting their time and preventing them from targeting others." },
              { q: "What is Hume AI?", a: "Hume AI is a powerful artificial intelligence platform designed to understand and analyze human emotions. By interpreting vocal, facial, and textual expressions, Hume AI enables systems to engage in more empathetic and natural conversations." },
              { q: "(Coming Soon) Can I still receive important calls?", a: "Scammer Jammer is designed to only intercept suspected scam calls, allowing legitimate calls to reach you normally." },
              { q: "(Coming Soon) How do I set up Scammer Jammer? ", a: "Setting up is easy! Simply sign up for an account, follow our quick setup guide, and you'll be protected in minutes." },
            ].map((faq, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
                  {faq.q}
                </h3>
                <p className="text-gray-600 ml-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="w-full py-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Join Us Now In Our Journey To Rid The World of Scammers
          </h2>
          <Link href="/tryusnow" className="text-blue-600 border border-blue-600 px-6 py-3 rounded-md hover:bg-blue-600 hover:text-white transition">
            Try Us Here
          </Link>
        </section>
      </div>
    </div>
  );
}