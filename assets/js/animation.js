// menu //


const menuButton = document.querySelector('.menu-button');
const topOverlay = document.querySelector('.top-overlay');
const menuOverlay = document.querySelector('.menu-overlay');
const menuItems = document.querySelectorAll('.menu a');

let isOpen = false;

menuButton.addEventListener('click', () => {
  if (!isOpen) {
    // Step 1: Animate the full-width overlay to slide down from the top
    gsap.to(topOverlay, { duration: 0.5, top: '0%', ease: 'power3.out' });

    // Step 2: After the top overlay animation, slide in the right-side menu overlay
    gsap.to(menuOverlay, { duration: 0.5, right: '0%', delay: 0.5, ease: 'power3.out' });

    // Step 3: Animate menu items to fade in sequentially
    gsap.to(menuItems, {
      duration: 0.5,
      opacity: 1,
      x: 0,
      stagger: 0.1,
      delay: 1,
      ease: "power3.out"
    });
  } else {
    // Close animations: reverse the order
    gsap.to(menuItems, { duration: 0.3, opacity: 0, x: 20, stagger: -0.1 });
    gsap.to(menuOverlay, { duration: 0.5, right: '-50%', delay: 0.2 });
    gsap.to(topOverlay, { duration: 0.5, top: '-100%', delay: 0.7, ease: 'power3.in' });
  }
  isOpen = !isOpen;
});
// menu //


//Animations

gsap.registerPlugin(ScrollTrigger);

// gsap.from(".nav-wrapper a", {
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".nav-wrapper a",
//     start: "top center",
//     toggleActions: "play restart restart reverse",
//   },
//   y: -800,
//   stagger: 0.3,
// });


// gsap.from(".abt-wrapper img", {
//   duration: 2,
//   x:-100,
//   opacity:0,
//   stagger: 1,
//   scrollTrigger: {
//     trigger: ".abt-wrapper img",
//     start: "center 100%",
//     end:"center 80%",
//     scrub: false, 
//     markers: false,
//     toggleActions: "play play reverse reverse",
//   },
// });

// gsap.from(".abt-wrapper", {
//   duration: 1,
//   y:-300,
//   opacity:0,
//   stagger: 2,
//   scrollTrigger: {
//     trigger: ".abt-wrapper",
//     start: "top 90%",
//     end:"center 50%",
//     scrub: false, 
//     markers: false,
//     toggleActions: "reverse play reverse reverse",
//   },
// });

// gsap.from(".abt-wrapper p", {
//   duration: 1,
//   x:-300,
//   opacity:0,
//   stagger: 3,
//   scrollTrigger: {
//     trigger: ".abt-wrapper p",
//     start: "center 100%",
//     end:"center 10%",
//     scrub: false, 
//     markers: false,
//     toggleActions: "play reverse play reverse",
//   },
// });

  gsap.from(".pfolio .owl-carousel .item", {
    duration: 200,
    x: 100,
    opacity:0,
    stagger: 50,
    scrollTrigger: {
      trigger: ".pfolio .owl-carousel .item",
      start: "top 130%",
      end:"center 50%",
      scrub: true, 
      markers: false,
      toggleActions: "play reverse play reverse",
    },
  });

  gsap.from(".pfolio2 .owl-carousel .item", {
    duration: 200,
    x: -100,
    opacity:0,
    stagger: 50,
    scrollTrigger: {
      trigger: ".pfolio2 .owl-carousel .item",
      start: "top 130%",
      end:"center 50%",
      scrub: true, 
      markers: false,
      toggleActions: "play none none reverse",
    },
  });

gsap.from(".about-sec", {
  duration: 1,
  x:300,
  opacity:0,
  stagger: 3,
  scrollTrigger: {
    trigger: ".about-sec",
    start: "center 130%",
    end:"center 0%",
    scrub: true, 
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

gsap.from(".letter", {
  duration: 1,
  y:-300,
  opacity:0,
  stagger: 1,
  scrollTrigger: {
    trigger: ".letter",
    start: "top 50%",
    end:"bottom 20%",
    scrub: true, 
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

gsap.from(".design", {
  duration: 1,
  x:-300,
  opacity:0,
  stagger: 1,
  scrollTrigger: {
    trigger: ".design",
    start: "center 130%",
    end:"bottom 0%",
    scrub: true, 
    markers: false,
    toggleActions: "play reverse play reverse",
  },
});

// gsap.from(".horizontal_slider", {
//   duration: 100,
//   y:-100,
//   opacity:0,
//   stagger: 50,
//   scrollTrigger: {
//     trigger: ".horizontal_slider",
//     start: "top 90%",
//     end:"center 50%",
//     scrub: true, 
//     markers: false,
//     toggleActions: "play reverse play reverse",
//   },
// });

// gsap.from(".investment", {
//   duration: 1,
//   x:300,
//   opacity:0,
//   stagger: 3,
//   scrollTrigger: {
//     trigger: ".investment",
//     start: "center 100%",
//     end:"center 10%",
//     scrub: false, 
//     markers: false,
//     toggleActions: "play reverse play reverse",
//   },
// });



// let counter = document.querySelectorAll(".counter-outr")
// let arr = Array.from(counter)

// arr.map((item)=>{
//     let count = 0

//     function CounterUp(){
//         count++
//         item.innerHTML = count
//         if(count == item.dataset.number){
//             clearInterval(stop);
//         }
//     }
//     let stop = setInterval(
//         function(){
//             CounterUp();
//         },100/item.dataset.speed
//     );
// })

gsap.from(".counter-outr", {
  duration: 1,
  y:-300,
  opacity:0,
  stagger: 3,
  scrollTrigger: {
    trigger: ".counter-outr",
    start: "top 50%",
    end:"bottom 20%",
    scrub: true, 
    markers: false,
    toggleActions: "play reverse play reverse",

    onEnter: () => startCounting(),
  }

});

function startCounting() {
  document.querySelectorAll('.counter').forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-number');
      const speed = +counter.getAttribute('data-speed');
      const count = +counter.innerText;

      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 8000 / speed);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
}

gsap.from(".partners", {
  duration: 1,
  y:-300,
  opacity:0,
  stagger: 3,
  scrollTrigger: {
    trigger: ".partners",
    start: "top 50%",
    end:"bottom 20%",
    scrub: true, 
    markers: false,
    toggleActions: "play reverse play reverse",
  }
});

gsap.from(".elevage", {
  duration: 500,
  x: -300,
  opacity:0,
  stagger: 50,
  scrollTrigger: {
    trigger: ".elevage",
    start: "top 130%",
    end:"center 50%",
    scrub: true, 
    markers: false,
    toggleActions: "play none none reverse",
  },
});

gsap.from(".touch-new", {
  duration: 500,
  x: 300,
  opacity:0,
  stagger: 50,
  scrollTrigger: {
    trigger: ".touch-new",
    start: "top 130%",
    end:"center 50%",
    scrub: true, 
    markers: false,
    toggleActions: "play none none reverse",
  },
});


// GSAP ScrollTrigger animation for .counter-outr
// gsap.from(".counter-outr", {
//   duration: 1,
//   y: -300,         // Slide the element in from above
//   opacity: 0,      // Fade it in
//   stagger: 0.3,    // Stagger the elements (if there are multiple elements with .counter-outr)
//   scrollTrigger: {
//     trigger: ".counter-outr",
//     start: "top 50%",  // When the top of .counter-outr hits 50% of the viewport height
//     end: "bottom 20%", // When the bottom of .counter-outr hits 20% of the viewport height
//     scrub: false,      // No scrubbing (animation isn't tied to scroll position)
//     markers: false,    // Disable markers for debugging
//     toggleActions: "play none none reverse", // Play animation on entry, reverse on leave
//     onEnter: () => {
//       // Trigger the zoom-in animation when .counter-outr enters the correct position
//       if (!document.querySelector(".zoom-count").classList.contains("zoomed")) {
//         gsap.to(".zoom-count", {
//           duration: 1.5,
//           opacity: 1,
//           scale: 1,
//           ease: "ease-out",
//         });
        
//         // Add a class to mark that the zoom animation has been triggered
//         document.querySelector(".zoom-count").classList.add("zoomed");
//       }
//     },
//     onLeaveBack: () => {
//       // Optionally reset the zoom animation when scrolling back up
//       gsap.to(".zoom-count", {
//         duration: 1.5,
//         opacity: 0,
//         scale: 0,
//         ease: "ease-out",
//       });

//       // Remove the zoomed class so the zoom can be triggered again if needed
//       document.querySelector(".zoom-count").classList.remove("zoomed");
//     },
//   }
// });





// // product-inner
// gsap.from(".psec-one", {
//   duration: 1,
//   x:300,
//   opacity:0,
//   stagger: 3,
//   scrollTrigger: {
//     trigger: ".psec-one",
//     start: "center 100%",
//     end:"bottom 0%",
//     scrub: false, 
//     markers: false,
//     toggleActions: "play reverse play reverse",
//   },
// });
// close-inner



// scroller-smooth
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 300)
})
gsap.ticker.lagSmoothing(0)

// close