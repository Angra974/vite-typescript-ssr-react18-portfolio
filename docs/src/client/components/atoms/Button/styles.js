"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Button = styled_components_1.default.button `
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
//# sourceMappingURL=styles.js.map