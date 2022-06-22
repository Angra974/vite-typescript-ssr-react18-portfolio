import { pResolve } from "../src/client/helpers/common";

const srcPath = "src/client";
const resolve = {
  alias: {
	"@": pResolve(srcPath),
    "@app": pResolve(`${srcPath}/app`),
    "@assets": pResolve(`${srcPath}/assets`),
    "@components": pResolve(`${srcPath}/components`),
    "@controllers": pResolve(`${srcPath}/controllers`),
    "@helpers": pResolve(`${srcPath}/helpers`),
    "@hooks": pResolve(`${srcPath}/hooks`),
	"@services": pResolve(`${srcPath}/services`),
	"@shared": pResolve(`${srcPath}/shared`),
    "@stylesheets": pResolve(`${srcPath}/stylesheets`),
    "@routes": pResolve(`${srcPath}/routes`),
	"@translations": pResolve(`${srcPath}/translations`),
  },
};

export default resolve;
