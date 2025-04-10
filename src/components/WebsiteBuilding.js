import React from "react";

import CategoriesContainer from "./CategoriesContainer";

import w1 from "../images/WebSiteBuilding/w1.jpg";
import w2 from "../images/WebSiteBuilding/w2.jpg";
import w3 from "../images/WebSiteBuilding/w3.jpg";
import w4 from "../images/WebSiteBuilding/w4.jpg";

const data = {
  heading: "Our Website Building Solutions",
  description:
    "We create customized websites—dynamic or static—to suit your business goals. Whether you need an interactive platform or a straightforward information hub, we've got you covered.",
  categories: [
    {
      img: w1,
    },
    {
      img: w2,
    },
    {
      img: w3,
    },
    {
      img: w4,
    },
    
  ],
  benefits: [
    "Professional Online Presence: Enhance credibility with a modern and user-friendly website.",
    "SEO Optimized: Generate organic traffic by ranking higher on search engines.",
    "Custom Solutions: Tailored designs that reflect your brand identity perfectly.",
  ],
};

const WebsiteBuilding = () => {
  return (
    <div className="relative z-0 dark:bg-gray-900 bg-white text-gray-900 dark:text-white pt-4 overflow-x-hidden">
      <CategoriesContainer data={data} />
    </div>
  );
};

export default WebsiteBuilding;
