import React from "react";

import CategoriesContainer from "./CategoriesContainer";

import A1 from "../images/AdOnWheels/A1.jpg";
import A2 from "../images/AdOnWheels/A2.jpg";
import A3 from "../images/AdOnWheels/A3.jpg";
import A4 from "../images/AdOnWheels/A4.jpg";
import A5 from "../images/AdOnWheels/A5.jpg";
import A6 from "../images/AdOnWheels/A6.jpeg";
import A7 from "../images/AdOnWheels/A7.jpg"

const data = {
  heading: "Our Ads On Wheels Solutions",
  description:
    "Turn your brand mobile with advertisements on vehicles. From cars to buses, your message will travel far and wide, making an impression wherever the wheels take you.",
  categories: [
    {
      img: A1,
    },
    {
      img: A2,
    },
    {
      img: A3,
    },
    {
      img: A4,
    },
    {
      img: A5,
    },
    {
      img: A6,
    },
    {
      img: A7
    }
  ],
  benefits: [
    "Extended Reach: Ads on wheels cover multiple locations, maximizing exposure across regions.",
    "High Recall: Mobile ads are unique, ensuring your brand stands out and is remembered.",
    "Versatile Locations: Reach areas where traditional advertising might struggle, such as highways or smaller towns.",
  ],
};

const AdOnWheels = () => {
  return (
    <div className="relative z-0 dark:bg-gray-900 bg-white text-gray-900 dark:text-white pt-4 overflow-x-hidden">
      <CategoriesContainer data={data} />
    </div>
  );
};

export default AdOnWheels;
