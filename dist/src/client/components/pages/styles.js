"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnImage = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div `
  display: flex;
  flex-direction: row;

  /* A seta indica pra pegar somente as divs filhas diretas */
  > div {
    width: 50%;
  }

  h1 {
    font-size: 58px;
    margin-bottom: 16px;
    font-weight: 700;
    color: #eee9db;
    line-height: 87px;
  }

  h3 {
    padding-right: 50px;
    font-size: 16px;
    font-weight: 400;
    color: #eee9db;
    line-height: 24px;
  }
`;
exports.ColumnImage = styled_components_1.default.div `
  text-align: right;
`;
//# sourceMappingURL=styles.js.map