import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

let featureItem = document.querySelectorAll(".feature-item");
let testimonial = document.querySelectorAll(".testimonial");

let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();

new RevealOnScroll(featureItem, "85%");
new RevealOnScroll(testimonial, "70%");
