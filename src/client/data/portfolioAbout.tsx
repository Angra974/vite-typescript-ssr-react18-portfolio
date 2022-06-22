import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNode, FaJs, FaPython } from "react-icons/fa";

// in customData.js
export const data = {
  // json data here
  AboutItems: [
    {
      largeText: "650+",
      smallText: ["Projects", "Completed"],
    },
    {
      largeText: "10+",
      smallText: ["Years of", "experience"],
    },
    {
      largeText: "300+",
      smallText: ["Happy", "Clients"],
    },
    {
      largeText: "400+",
      smallText: ["Customer", "reviews"],
    },
  ],
  progress: [
    {
      icon: <FaHtml5 />,
      title: "html5",
      text: "80%",
      classname: "html",
    },
    {
      icon: <FaCss3Alt />,
      title: "css3",
      text: "95%",
      classname: "css",
    },
    {
      icon: <FaJs />,
      title: "javascript",
      text: "75%",
      classname: "js",
    },
    {
      icon: <FaReact />,
      title: "ReactJs",
      text: "75%",
      classname: "react",
    },
    {
      icon: <FaNode />,
      title: "NodeJs",
      text: "87%",
      classname: "node",
    },
    {
      icon: <FaPython />,
      title: "Python",
      text: "70%",
      classname: "python",
    },
  ],
};
