import React from "react";

import CategoriesContainer from "./CategoriesContainer";

import d1 from "../images/DigitalMarketingImages/d1.jpg";
import d2 from "../images/DigitalMarketingImages/d2.jpg";
import d3 from "../images/DigitalMarketingImages/d3.jpg";
import d4 from "../images/DigitalMarketingImages/d4.jpg";
import d5 from "../images/DigitalMarketingImages/d5.jpg";

const data = {
  heading: "Our Digital Marketing Solutions",
  description:
    "Unlock the power of online advertising to grow your business. Harness tools like SEO, social media marketing, Google Ads, email campaigns, and content creation to connect with audiences globally.",
  categories: [
    {
      img: d1,
    },
    {
      img: d2,
    },
    {
      img: d3,
    },
    {
      img: d4,
    },
    {
      img: d5,
    },
  ],
  benefits: [
    "Targeted Advertising: Reach the exact audience for your products or services using data-driven strategies.",
    "Increased ROI: Digital campaigns are measurable, allowing you to optimize investments effectively.",
    "24/7 Engagement: Promote your business any time, anywhere, for continuous growth.",
  ],
};

const DigitalMarketing = () => {
  return (
    <div className="relative z-0 dark:bg-gray-900 bg-white text-gray-900 dark:text-white pt-4 overflow-x-hidden">
      <CategoriesContainer data={data} />
    </div>
  );
};

export default DigitalMarketing;
