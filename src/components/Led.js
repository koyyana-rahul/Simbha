import React from "react";

import hospitals from "../images/LedImages/hospitals.jpg";
import schools from "../images/LedImages/schools.jpg";
import jewellery from "../images/LedImages/jewellery.jpg";
import restaurant from "../images/LedImages/restaurant.jpg";
import realestate from "../images/LedImages/realestate.jpg";
import clothes from "../images/LedImages/clothes.jpg";
import CategoriesContainer from "./CategoriesContainer";
import l1 from "../images/LedImages/l1.jpg";
import l2 from "../images/LedImages/l2.jpeg";
import l3 from "../images/LedImages/l3.jpeg";
import malls from "../images/LedImages/malls.jpg"
import publicPlaces from "../images/LedImages/publicPlace.jpg"
import l4 from "../images/LedImages/l4.jpg"
const data = {
  heading: "Our LED Display Solutions",
  description:
    "Showcase your business on high-resolution LED screens (32–64 inches) with 100+ displays across high-traffic areas.",
  categories: [
   
    { img: restaurant },
    { img: realestate },
    { img: hospitals },
    { img: schools },
    { img: clothes },
    { img: jewellery },
    { img: l1 },
    { img: l2 },
    { img: l3 },
    {img: l4},
    {img: malls},
    {img: publicPlaces}
  ],
  benefits: [
    "Increased Reach: Target thousands of viewers daily by placing your business where everyone’s eyes naturally fall.",
    "High Visibility: Bright and vibrant visuals attract attention even in crowded or chaotic environments.",
    "Dynamic Advertising: Unlike static posters, LED displays allow animation, ensuring your brand stands out.",
  ],
};

const Led = () => {
  return (
    <div className="relative z-0 dark:bg-gray-900 bg-white text-gray-900 dark:text-white pt-4 overflow-x-hidden">
      <CategoriesContainer data={data} />
    </div>
  );
};

export default Led;
