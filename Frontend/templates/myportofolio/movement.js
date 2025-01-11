document.addEventListener("DOMContentLoaded", () => {
  gsap.from("header", { duration: 1, y: -100, opacity: 0, ease: "power2.out" });
  gsap.from(".presentation p, .presentation h1", {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
  });
  gsap.from(".servicescomponent", {
    scrollTrigger: ".skills-component",
    duration: 1,
    opacity: 0,
    scale: 0.8,
    stagger: 0.2,
    ease: "power2.out",
  });
});
