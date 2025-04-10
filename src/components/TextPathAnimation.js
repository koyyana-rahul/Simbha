import React from "react";

const servicesTop = [
  "Led Display Ads",
  "Tea Cup Printing Ads",
  "Digital Marketing",
  "Website Building",
  "Ads On Wheels",
  "Making Ad Films",
];

const servicesBottom = ["SEO", "Influencer Marketing", "Strategy"];

const TextPathAnimation = () => {
  return (
    <div className="w-full overflow-hidden relative py-10 sm:py-16 md:py-20 bg-neutral-100 dark:bg-black">
      <div className="flex flex-col gap-10 sm:gap-16 items-center justify-center">
        {/* Top Scrolling Gradient Text */}
        <div className="relative w-full overflow-hidden">
          <div className="marquee-wrapper font-semibold tracking-wide outlined-text">
            <div className="marquee-content-top flex gap-10 text-[10vw] sm:text-[7vw] md:text-[5vw] lg:text-[4vw] text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-700 dark:from-yellow-400 dark:via-pink-500 dark:to-red-500 drop-shadow-sm">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-10">
                  {servicesTop.map((service, index) => (
                    <span
                      key={`${i}-${index}`}
                      className="flex items-center gap-3 whitespace-nowrap"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 dark:from-yellow-400 dark:to-red-500 shrink-0"></span>
                      <span>{service}</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Scrolling Outlined Text (same style as before) */}
        <div className="relative w-full overflow-hidden">
          <div className="marquee-wrapper font-extrabold tracking-tight outlined-text">
            <div className="marquee-content-bottom text-[10vw] sm:text-[7vw] md:text-[5vw] lg:text-[4vw] text-transparent">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="mx-6 sm:mx-12 inline-block whitespace-nowrap">
                  • {servicesBottom.join(" • ")}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Inline Styles */}
      <style>{`
        .marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee-content-top {
          display: inline-flex;
          animation: scroll-left-smooth 25s linear infinite;
        }

        .marquee-content-bottom {
          display: inline-block;
          animation: scroll-left 30s linear infinite;
          white-space: nowrap;
        }

        @keyframes scroll-left-smooth {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
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
