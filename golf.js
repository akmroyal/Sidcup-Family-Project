
var crsr = document.querySelector(".cursor");
var blur_crsr = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur_crsr.style.left = dets.x - 250 + "px";
    blur_crsr.style.top = dets.y - 250 + "px";
})

gsap.to(".nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "25vh",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers: true,
        start: "top -20%",
        end: "top -11%",
        scrub: true
    }
})
gsap.to(".main-section", {
    backgroundColor: "#000",
    duration: 0.5,
    scrollTrigger: {
        trigger: ".main-section",
        scroller: "body",
        // markers: true,
        start: "top -40%",
        end: "top -100%",
        scrub: 2
    }
})
gsap.from(".about-section img,.about-us", {
    y: 50,
    opacity: 0,
    duration: 1,
    // stagger:0.4,
    scrollTrigger: {
        trigger: ".about-section",
        scroller: "body",
        start: "top 65%",
        end: "top 55%",
        scrub: 3
    }
})

gsap.from(".card", {
    scale: 0.6,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }

})

gsap.from(".box-cont #effect", {
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: ".box-cont #effect",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 2
    }
})

