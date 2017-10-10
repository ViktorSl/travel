import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";

let featureItem = document.querySelectorAll(".feature-item");
let testimonial = document.querySelectorAll(".testimonial");

let mobileMenu = new MobileMenu();

new RevealOnScroll(featureItem, "85%");
new RevealOnScroll(testimonial, "70%");
