// Select cursor elements
var crsr = document.querySelector('#cursor');
var blurcrsr = document.querySelector('#cursor-blur');

// Move the cursor and blur cursor
document.addEventListener('mousemove', function(dets){
    crsr.style.left = dets.x + 30 + "px";
    crsr.style.top = dets.y + "px";
    blurcrsr.style.left = (dets.x - 250) + "px";
    blurcrsr.style.top = (dets.y - 250) + "px";
});

// Scale the cursor on nav hover
var h4all = document.querySelectorAll("nav h4");
h4all.forEach(function(elem){
   elem.addEventListener("mouseenter", function(){
       crsr.style.transform = "scale(4)";
       crsr.style.border = "0.5px solid #ccc";
       crsr.style.backgroundColor = "transparent";
   });

   elem.addEventListener("mouseleave", function(){
       crsr.style.transform = "scale(1)";
       crsr.style.backgroundColor = "#95C11E";
       crsr.style.border = "1px solid #95C11E";
   });
});

var containerCard = document.querySelectorAll("#container-card .card");
containerCard.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.transform = "scale(4)";
        crsr.style.border = "0.5px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
 
    elem.addEventListener("mouseleave", function(){
        crsr.style.transform = "scale(1)";
        crsr.style.backgroundColor = "#95C11E";
        crsr.style.border = "1px solid #95C11E";
    });
 });

var elem  = document.querySelectorAll("#page4 .elem");
elem.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        crsr.style.transform = "scale(4)";
        crsr.style.border = "0.5px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
 
    e.addEventListener("mouseleave", function(){
        crsr.style.transform = "scale(1)";
        crsr.style.backgroundColor = "#95C11E";
        crsr.style.border = "1px solid #95C11E";
    });
 });
// Register ScrollTrigger plugin for GSAP
gsap.registerPlugin(ScrollTrigger);

// Scroll-triggered nav background color change
gsap.to("nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
        trigger: "nav",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // markers: true,
    }
});

// Scroll-triggered main section background color change
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        scrub: 2,
        start: "top -30%",
        end: "top -70%"
    }
});
gsap.from("#about-us img, #about-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 58%",
        scrub: 3
    }
})
// gsap.from(".card", {
//     scale: 0.8,
//     opacity: 0,
//     duration: 1,
//     stagger:0.1,
//     scrollTrigger: {
//         trigger: ".card",
//         scroller: "body",
//         start: "top 70%",
//         end: "top 65%",
//         scrub: 2
//     }
// });
gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 65%", // Increase the start percentage to make the animation slower
        end: "top 35%",   // Adjust the end position to provide more scroll time
        scrub: 1
    }
});

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 65%", // Adjusted to match #colon1's scroll behavior
        end: "top 35%",
        scrub: 1
    }
});
gsap.from("#page4 h1", {
    y: 60,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 98%", // Starts the animation earlier in the scroll
        end: "top 90%",    
        scrub: 3     // Make the animation faster by reducing scrub value
    }
});

var footer  = document.querySelectorAll(".footer-icons i");
footer.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        crsr.style.transform = "scale(4)";
        crsr.style.border = "0.5px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
 
    e.addEventListener("mouseleave", function(){
        crsr.style.transform = "scale(1)";
        crsr.style.backgroundColor = "#95C11E";
        crsr.style.border = "1px solid #95C11E";
    });
 });
 
var footerh1  = document.querySelectorAll(".footerelem h1");
footerh1.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        crsr.style.transform = "scale(4)";
        crsr.style.border = "0.5px solid #fff";
        crsr.style.backgroundColor = "transparent";
    });
 
    e.addEventListener("mouseleave", function(){
        crsr.style.transform = "scale(1)";
        crsr.style.backgroundColor = "#95C11E";
        crsr.style.border = "1px solid #95C11E";
    });
 });