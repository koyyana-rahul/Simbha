import React from "react";

import CategoriesContainer from "./CategoriesContainer";
import t0 from "../images/TeaCupImages/t0.jpg"
import t1 from "../images/TeaCupImages/t1.jpeg";
import t2 from "../images/TeaCupImages/t2.jpg";
import t3 from "../images/TeaCupImages/t3.png";
import t4 from "../images/TeaCupImages/t4.jpeg";
import t5 from "../images/TeaCupImages/t5.jpg";
import t6 from "../images/TeaCupImages/t6.jpeg";
import t7 from "../images/TeaCupImages/t7.jpeg";
import t8 from "../images/TeaCupImages/t8.jpeg";
import t9 from "../images/TeaCupImages/t9.jpg"

const data = {
  heading: "Our Tea Cup Printing Solutions",
  description:
    "Print your brand logo or promotional messages on tea cups, spreading awareness in even the most remote locations. Every sip brings your brand closer to customers in tea stalls, offices, and homes.",
  categories: [
    {
      img: t0,
    },
    {
      img: t1,
    },
    {
      img: t2,
    },
    {
      img: t3,
    },
    {
      img: t4,
    },
    {
      img: t5,
    },
    {
      img: t6,
    },
    {
      img: t7,
    },
    {
      img: t8,
    },
    {
      img: t9
    }
  ],
  benefits: [
    "Cost-Effective Marketing: Reach potential customers affordably without compromising on impact.",
    "Broad Demographic Reach: Engage diverse audiences—office-goers, travelers, and residents alike.",
    "Subtle Yet Memorable: Customers interact with your brand during leisurely moments, leaving a lasting impression.",
  ],
};

const TeaCup = () => {
  return (
    <div className="relative z-0 dark:bg-gray-900 bg-white text-gray-900 dark:text-white pt-4 overflow-x-hidden">
      <CategoriesContainer data={data} />
    </div>
  );
};

export default TeaCup;
