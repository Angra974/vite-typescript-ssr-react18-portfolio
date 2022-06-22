import styled from "styled-components";

export const Button = styled.button`
  background: var(--c-primary-white);
  color: ${props => (props.color ? props.color : "#ffffff")};
  border: none;
  padding: 1rem 2rem;
  margin: 0.5rem 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  border-radius: 10px;
`;
