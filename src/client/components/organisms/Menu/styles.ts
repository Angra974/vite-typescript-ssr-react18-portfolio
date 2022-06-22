import styled from "styled-components";

export const Menu = styled.nav`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 680px) {
    display: none;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
  }

  ul li a {
    padding: 0.7rem;
    margin: 0.7rem;
    cursor: pointer;
    font-weight: 500;
    font-size: 1.5rem;
    text-decoration: none;
    color: var(--color-secondary);
    transition: all 0.3s ease-in-out;
  }

  ul li a:hover {
    background-color: var(--color-secondary);
    color: var(--color-primary);
    border-radius: 10%;
    transition: background-color 0.3s;
  }
`;
