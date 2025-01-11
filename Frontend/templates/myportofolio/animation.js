window.onload = () => {
  gsap.from(".headercontent", {
    duration: 3,
    y: -40,
    opacity: 0,
    stagger: 0.3,
    elasticity: 1,
    ease: "elastic.out(1, 0.75)",
    delay: 0.5,
    repeat: 0,
    yoyo: true,
  });
  gsap.from(".myname p", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    stagger: 0.3,
  });

  gsap.from(".photo img", {
    duration: 1.5,
    opacity: 0,
    scale: 0.8,
    ease: "elastic.out(1, 0.75)",
  });

  gsap.from(".servicescontaint", {
    y: 50,
    duration: 2,
    opacity: 0,
    scale: 0.9,
    ease: "elastic.out(1, 0.5)",
    stagger: 0.2,
  });
};
