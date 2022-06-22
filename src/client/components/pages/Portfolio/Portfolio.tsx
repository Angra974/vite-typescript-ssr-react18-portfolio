import React, { FC } from "react";
import Frontend from "@components/templates/Frontend/Frontend";

import "./styles.scss";

import Menu from "@components/organisms/Menu";
import Header from "@components/organisms/Header";
import SectionsProvider from "@components/organisms/Portfolio/SectionsProvider";

interface Props {
  active?: string;
}

/*
 * Return a portfolio page Home/Contact/Blog etc...
 * @parameter { string } active : the page to show
 */
export const Portfolio: FC<Props> = ({ active = "home" }) => {
  return (
    <>
      <Menu />
      <Header />
      <Frontend>
        <SectionsProvider active={active} />
      </Frontend>
    </>
  );
};

export default Portfolio;

/* export the possible page to load */
export const Home: FC<Props> = ({}) => Portfolio({ active: "home" });
export const Contact: FC<Props> = ({}) => Portfolio({ active: "contact" });
export const Blog: FC<Props> = ({}) => Portfolio({ active: "blog" });
export const About: FC<Props> = ({}) => Portfolio({ active: "about" });
/* Portfolio is already used so we take Pfolio to be close to it */
export const Pfolio: FC<Props> = ({}) => Portfolio({ active: "portfolio" });
export const ErrorNotFound: FC<Props> = ({}) => Portfolio({ active: "error" });

export const portfolioRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/portfolio",
    element: <Pfolio />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];
