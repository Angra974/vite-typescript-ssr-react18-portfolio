import React from "react";

import {
  FaMapMarkerAlt,
  FaEnvelopeOpen,
  FaUserGraduate,
  FaPhoneAlt,
  FaGlobeAfrica,
  FaFacebook,
  FaTwitter,
  FaGithubAlt,
  FaYoutube
} from "react-icons/fa";

const data = {
  email: "maclinzuniversal@gmail.com",
  items: [
    {
      container: "div",
      icon: <FaMapMarkerAlt />,
      label: "Location",
      text: "London, united Kingdom",
    },
    {
      container: "div",
      icon: <FaEnvelopeOpen />,
      label: "Email",
      text: "maclinzuniversal@gmail.com",
    },
    {
      container: "div",
      icon: <FaUserGraduate />,
      label: "Education",
      text: "Sussex University, East Sussex",
    },
    {
      container: "div",
      icon: <FaPhoneAlt />,
      label: "Mobile Number",
      text: "07522670617",
    },
    {
      container: "div",
      icon: <FaGlobeAfrica />,
      label: "Languages",
      text: "Afrikaans, English, Spanish",
    },
  ],
  socials: [
    {
      href: "https://www.facebook.com",
      target: "_blank",
      icon: <FaFacebook />,
    },
    {
      href: "https://twitter.com",
      target: "_blank",
      icon: <FaTwitter />,
    },
    {
      href: "https://github.com",
      target: "_blank",
      icon: <FaGithubAlt />,
    },
    {
      href: "https://youtube.com",
      target: "_blank",
      icon: <FaYoutube />,
    },
  ],
};

export default data;
