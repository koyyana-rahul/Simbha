import React from "react";

const servicesTop = [
  "Led Display Ads",
  "Tea Cup Printing Ads",
  "Digital Marketing",
  "Website Building",
  "Ads On Wheels",
  "Making Ad Films",
];

const servicesBottom = [
  "SEO",
  "Influencer Marketing",
  "Strategy",
];

const TextPathAnimation = () => {
  return (
    <div className="w-full overflow-hidden relative py-10 sm:py-16 md:py-20 bg-neutral-100 dark:bg-black">
      <div className="flex flex-col gap-10 sm:gap-16 items-center justify-center">
        {/* Top fast gradient scroll text */}
        <div className="relative w-full overflow-hidden">
          <div className="marquee-track font-extrabold tracking-tight outlined-text">
            <div className="marquee-content w-[300%] animate-marquee whitespace-nowrap text-[10vw] sm:text-[7vw] md:text-[5vw] lg:text-[4vw] text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-700 dark:from-yellow-400 dark:to-pink-400">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="mx-6 sm:mx-12 inline-block">
                  {servicesTop.join(" _ ")}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fast outlined scroll text */}
        <div className="relative w-full overflow-hidden">
          <div className="marquee-track font-extrabold tracking-tight outlined-text">
            <div className="marquee-content w-[300%] animate-marquee whitespace-nowrap text-[10vw] sm:text-[7vw] md:text-[5vw] lg:text-[4vw]">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="mx-6 sm:mx-12 inline-block">
                  {servicesBottom.join(" _ ")}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Inline Styles */}
      <style>{`
        .marquee-track {
          display: flex;
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-content {
          display: inline-block;
          animation: scroll-left 15s linear infinite;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .outlined-text {
          color: transparent;
          -webkit-text-stroke: 1px rgba(0, 0, 0, 0.25);
        }

        .dark .outlined-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </div>
  );
};

export default TextPathAnimation;
