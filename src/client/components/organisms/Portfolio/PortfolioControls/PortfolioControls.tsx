import React, { FC, useId } from "react";
import { FaHome, FaUser, FaBriefcase, FaNewspaper, FaEnvelopeOpen } from "react-icons/fa";
import IconContainer from "@components/molecules/IconContainer";
import ThemeSwitcher from "@components/molecules/Portfolio/ThemeSwitcher";
import "./styles.scss";

interface Props {
  active: string;
}

/**
 * @params {string} active : actual active pages
 * @default { string } home : default page
 */
const PortfolioControls: FC<Props> = ({ active = "home" }: Props) => {

  const uid = useId();

  /**
   *
   * @param el target of the event
   * Switch between active state for control button and active the associate page
   */
  const handleClick = (el: React.MouseEvent<HTMLElement>): void => {
    const activeBtn = document.querySelector(".active-btn");

    const target: HTMLElement = el.currentTarget;
    // if the button clicked is not the current button
    if (activeBtn && !target.classList.contains("active-btn")) {
      // remove active class to selected element
      activeBtn.classList.remove("active-btn");
      // add active class to current element
      target.classList.add("active-btn");
    }

    // remove active to last active element and add display none
    const activeEl = document.querySelector<HTMLElement>(".active");
    if (activeEl) {
      activeEl.classList.remove("active");
      activeEl.style.display = "none";
    }

    if (target.dataset.id) {
      // Remove active link on menu.
      document.querySelectorAll("a[data-nav]").forEach(el => el.classList.remove("is_active"));

      // add active menu on the selected element
      const menuLink = document.querySelector(`a[data-nav="${target.dataset.id}"]`);
      menuLink && menuLink.classList.add("is_active");

      // put current element to active
      const currentEl = document.getElementById(target.dataset.id);
      if (currentEl) {
        currentEl.classList.add("active");
        currentEl.style.display = "block";
      }
    }
  };

  const menuItems = {
    Home: <FaHome />,
    About: <FaUser />,
    Portfolio: <FaBriefcase />,
    Blog: <FaNewspaper />,
    Contact: <FaEnvelopeOpen />,
  };

  /**
   * loop through all menu entries and create the control menu
   */
  const controlsMenu: any = [];
  Object.entries(menuItems).forEach(([id, icon]) => {
    const name = id.toLowerCase();
    controlsMenu.push(
      <IconContainer
        as="div"
        tagProps={{
          className: "control primary" + `${active === name ? " active-btn" : ""}`,
          "data-id": `${name}`,
          onClick: (el: React.MouseEvent<HTMLElement>) => handleClick(el),
        }}
        icon={icon}
        key={`${id}${uid}}`}
      />,
    );
  });

  return (
    <>
      <div className="controls">{controlsMenu}</div>
      <ThemeSwitcher />
    </>
  );
};

export default PortfolioControls;
