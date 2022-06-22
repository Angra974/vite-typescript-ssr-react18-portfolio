"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectMenu = void 0;
function selectMenu(active = "home") {
    const menuLinks = document.querySelectorAll("a[data-nav]");
    menuLinks.forEach(el => {
        el.classList.contains("is_active") && el.classList.remove("is_active");
    });
    document.querySelector(`a[data-nav="${active}"]`)?.classList.add("is_active");
}
exports.selectMenu = selectMenu;
//# sourceMappingURL=menuHelpers.js.map