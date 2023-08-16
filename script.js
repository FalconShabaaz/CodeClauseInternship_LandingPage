console.log("Hello Shabaaz");

var tl = gsap.timeline();

tl.from("nav", {
  y: -1000,
  duration: 1.5,
  stagger: 0.2,
  opacity: 0,
});

tl.from('#logo-img, #main-heading p,#input-form input,#input-form button,#socials a',{
    x:-800,
    duration:1,
    stagger:0.2,
    opacity:0
})

tl.from('#logo-img',{
    rotate : 360
})
