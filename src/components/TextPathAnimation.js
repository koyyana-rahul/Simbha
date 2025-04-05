import React from "react";

const TextPathAnimation = () => {
  return (
    <div className="w-full overflow-hidden relative py-10 sm:py-16 bg-neutral-100 dark:bg-black">
      <div className="flex flex-col gap-6 sm:gap-10 items-center justify-center">

        {/* Primary line - gradient filled bold text */}
        <div className="w-[200%] animate-marquee whitespace-nowrap font-extrabold text-[6vw] sm:text-[6.5vw] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#38B2AC] to-[#6B21A8] dark:from-[#FBBF24] dark:to-[#F472B6]">
          <span className="mr-12 sm:mr-24">Branding _ Ad Films _ Digital Marketing</span>
          <span>Branding _ Ad Films _ Digital Marketing</span>
        </div>

        {/* Secondary line - more subtle stroke and shadow for light mode */}
        <div className="w-[200%] animate-marquee-slower whitespace-nowrap font-bold text-[5vw] sm:text-[6vw] tracking-tight text-transparent stroke-light-mode light:stroke-light-mode light:text-black dark:stroke-dark-mode dark:text-white">
          <span className="mr-12 sm:mr-24">SEO _ Influencer Marketing _ Strategy</span>
          <span>SEO _ Influencer Marketing _ Strategy</span>
        </div>
      </div>

      {/* Animation & stroke styling */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          50% { transform: translateX(-25%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
        .animate-marquee-slower {
          animation: marquee 70s linear infinite;
        }

        /* Stroke effect for text visibility */
        .stroke-light-mode {
          -webkit-text-stroke: 1px rgba(0, 0, 0, 0.3); /* Lighter stroke for better balance */
        }

        /* Light mode text styling */
        .light\:text-black {
          color: black; /* Black text color in light mode */
        }

        /* Subtle text shadow for dark mode visibility */
        .dark\:text-white {
          text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.6);
        }

        /* Light mode subtle shadow for text to improve readability */
        .light\:text-black {
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); /* Subtle shadow for better legibility */
        }

        /* Optimize animation performance */
        .animate-marquee, .animate-marquee-slower {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default TextPathAnimation;
