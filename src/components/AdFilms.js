import React from "react";
import CategoriesContainer from "./CategoriesContainer";

import f1 from "../images/AdFilms/f1.jpg";
import f2 from "../images/AdFilms/f2.jpg";
import f3 from "../images/AdFilms/f3.jpg";
import f4 from "../images/AdFilms/f4.jpg";
import f5 from "../images/AdFilms/f5.jpeg";
import f6 from "../images/AdFilms/f6.jpeg";

const data = {
  heading: "Our Ad Film Making Solutions",
  description:
    "Our team produces stunning video ads tailored to your business needs. From concept creation to filming and editing, we bring your brand story to life for digital platforms or TV.",
  categories: [
    {
      img: f1,
    },
    {
      img: f2,
    },
    {
      img: f3,
    },
    {
      img: f4,
    },
    {
      img: f5,
    },
    {
      img: f6
    }
  ],
  benefits: [
    "Compelling Storytelling: Capture your audience's attention with high-quality visuals and engaging narratives.",
    "Multi-Platform Impact: Perfect for social media, websites, television, or presentations.",
    "Professional Edge: Stand out with polished and creative production that highlights your services effectively.",
  ],
};

const AdFilms = () => {
  return (
    <div className="relative z-0 dark:bg-gray-900 bg-white text-gray-900 dark:text-white pt-4 overflow-x-hidden">
      <CategoriesContainer data={data} />
    </div>
  );
};

export default AdFilms;
