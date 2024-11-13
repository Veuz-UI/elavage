

// -------accordian-----//
const accordions = document.querySelectorAll('.accordion-header');

accordions.forEach(accordion => {
    accordion.addEventListener('click', function() {
        const accordionItem = this.parentElement;
        const accordionBody = accordionItem.querySelector('.accordion-body');

        if (accordionItem.classList.contains('active')) {
            accordionItem.classList.remove('active');
        } else {
            document.querySelectorAll('.accordion-item').forEach(item => item.classList.remove('active'));
            accordionItem.classList.add('active');
        }
    });
});

// -------accordian-----//

//about image jump
let goingUp = true; 
function jumpImage() { 
    const image = document.getElementById('image'); 
    if (goingUp) { 
        image.style.top = '0'; 
    } else { 
        image.style.top = '5%'; 
    } 
    goingUp = !goingUp; 
} setInterval(jumpImage, 1000);
//end

// product-slider
$('.pfolio .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: [
     '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      780: {
        items: 2
      },
      900: {
        items: 2
      },
      1000: {
        items: 3
      },
      1300: {
        items: 4
      }
    }
  })
  // close


  $('.pfolio2 .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    rtl:true,
    navText: [
     '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      780: {
        items: 2
      },
      900: {
        items: 2
      },
      1000: {
        items: 3
      },
      1300: {
        items: 4
      }
    }
  })
  
  // close

//cursor pointer
$(window).mousemove(function (e) {
	$(".ring").css(
		"transform",
		`translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`
	);
});
//END cursor pointer

/*---returnTop-----*/
window.onscroll = function() {
  const topButton = document.getElementById("topButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

// Function to scroll to the top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


//video-banner


// console.clear();

// const video = document.querySelector(".video-background");
// let src = video.currentSrc || video.src;
// console.log(video, src);

// function once(el, event, fn, opts) {
//   var onceFn = function (e) {
//     el.removeEventListener(event, onceFn);
//     fn.apply(this, arguments);
//   };
//   el.addEventListener(event, onceFn, opts);
//   return onceFn;
// }

// once(document.documentElement, "touchstart", function (e) {
//   video.play();
//   video.pause();
// });

// gsap.registerPlugin(ScrollTrigger);

// let tl = gsap.timeline({
//   defaults: { duration: 1 },
//   scrollTrigger: {
//     trigger: "#container",
//     start: "top top",
//     end: "bottom bottom",
//     scrub: true
//   }
// });

// once(video, "loadedmetadata", () => {
//   tl.fromTo(
//     video,
//     {
//       currentTime: 0
//     },
//     {
//       currentTime: video.duration || 1
//     }
//   );
// });

// setTimeout(function () {
//   if (window["fetch"]) {
//     fetch(src)
//       .then((response) => response.blob())
//       .then((response) => {
//         var blobURL = URL.createObjectURL(response);

//         var t = video.currentTime;
//         once(document.documentElement, "touchstart", function (e) {
//           video.play();
//           video.pause();
//         });

//         video.setAttribute("src", blobURL);
//         video.currentTime = t + 0.01;
//       });
//   }
// }, 1000);




// const video = document.querySelector(".video-background");
// let src = video.currentSrc || video.src;
// console.log(video, src);

// function once(el, event, fn, opts) {
//     var onceFn = function (e) {
//         el.removeEventListener(event, onceFn);
//         fn.apply(this, arguments);
//     };
//     el.addEventListener(event, onceFn, opts);
//     return onceFn;
// }

// once(document.documentElement, "touchstart", function (e) {
//     video.play();
//     video.pause();
// });

// gsap.registerPlugin(ScrollTrigger);

// let tl = gsap.timeline({
//     defaults: { duration: 1 },
//     scrollTrigger: {
//         trigger: "#container",
//         start: "top top",   
//         end: "bottom bottom",
//         scrub: 1,          
//         onUpdate: (self) => { 
//             let videoProgress = self.progress; 
//             let videoDuration = video.duration || 1;
//             video.currentTime = videoProgress * videoDuration;
//         },
//         onLeave: () => {
//             video.pause();
//         },
//         onEnter: () => {
//             video.play();
//         },
//         markers: false 
//     }
// });

// once(video, "loadedmetadata", () => {
//     tl.fromTo(
//         video,
//         {
//             currentTime: 0
//         },
//         {
//             currentTime: video.duration || 1
//         }
//     );
// });

// setTimeout(function () {
//     if (window["fetch"]) {
//         fetch(src)
//             .then((response) => response.blob())
//             .then((response) => {
//                 var blobURL = URL.createObjectURL(response);
//                 var t = video.currentTime;
//                 once(document.documentElement, "touchstart", function (e) {
//                     video.play();
//                     video.pause();
//                 });

//                 video.setAttribute("src", blobURL);
//                 video.currentTime = t + 0.01;
//             });
//     }
// }, 1000);


// console.clear();

// function once(el, event, fn, opts) {
//   var onceFn = function (e) {
//     el.removeEventListener(event, onceFn);
//     fn.apply(this, arguments);
//   };
//   el.addEventListener(event, onceFn, opts);
//   return onceFn;
// }

// const video = document.querySelector(".video-background");
// let src = video.currentSrc || video.src;
// console.log(video, src);

// once(document.documentElement, "touchstart", function (e) {
//   video.play();
//   video.pause();
// });

// gsap.registerPlugin(ScrollTrigger);

// let tl = gsap.timeline({
//   defaults: { duration: 1 },
//   scrollTrigger: {
//     trigger: "#container", 
//     start: "top top",       
//     end: "bottom bottom",   
//     scrub: 1,               
//     onUpdate: (self) => {
//       let videoProgress = self.progress; 
//       let videoDuration = video.duration || 1;
//       video.currentTime = videoProgress * videoDuration;
//     },
//     onLeave: () => {
//       video.pause();
//     },
//     onEnterBack: () => {
//       video.play();
//     },
//     onLeaveBack: () => {
//       video.pause();
//     }
//   }
// });

// once(video, "loadedmetadata", () => {
//   tl.fromTo(
//     video,
//     {
//       currentTime: 0 
//     },
//     {
//       currentTime: video.duration || 1 
//     }
//   );
// });

// setTimeout(function () {
//   if (window["fetch"]) {
//     fetch(src)
//       .then((response) => response.blob())
//       .then((response) => {
//         var blobURL = URL.createObjectURL(response);

//         var t = video.currentTime;
//         once(document.documentElement, "touchstart", function (e) {
//           video.play();
//           video.pause();
//         });

//         video.setAttribute("src", blobURL);
//         video.currentTime = t + 0.01;
//       });
//   }
// }, 1000);



// console.clear();
// function once(el, event, fn, opts) {
//     var onceFn = function (e) {
//         el.removeEventListener(event, onceFn);
//         fn.apply(this, arguments);
//     };
//     el.addEventListener(event, onceFn, opts);
//     return onceFn;
// }

// const video = document.querySelector(".video-background");
// let src = video.currentSrc || video.src;
// console.log(video, src);

// once(document.documentElement, "touchstart", function (e) {
//     video.play();
//     video.pause();
// });

// gsap.registerPlugin(ScrollTrigger);

// let videoDuration = 0;

// video.addEventListener('loadedmetadata', function() {
//     videoDuration = video.duration;
// });

// let scrollTrigger = ScrollTrigger.create({
//     trigger: "#container",
//     start: "top top", 
//     end: "bottom bottom", 
//     scrub: true,
//     onUpdate: (self) => {
//         let videoProgress = self.progress; 
//         video.currentTime = videoProgress * videoDuration;
//     },
//     onEnter: () => {
//         if (video.paused) {
//             video.play();
//         }
//     },
//     onLeave: () => {
//         if (!video.paused) {
//             video.pause();
//         }
//     },
//     onEnterBack: () => {
//         if (video.paused) {
//             video.play();
//         }
//     },
//     onLeaveBack: () => {
//         if (!video.paused) {
//             video.pause();
//         }
//     }
// });


// console.clear();

// const video = document.querySelector(".video-background");
// let videoDuration = 0;

// video.addEventListener('loadedmetadata', function () {
//     videoDuration = video.duration;
// });

// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.create({
//     trigger: "#container",
//     start: "top top", 
//     end: "bottom bottom", 
//     scrub: true,
//     onUpdate: (self) => {
//         let scrollProgress = self.progress;
//         video.currentTime = scrollProgress * videoDuration;
//     },
//     onEnter: () => {
//         if (video.paused) {
//             video.play();
//         }
//     },
//     onLeave: () => {
//         if (!video.paused) {
//             video.pause();
//         }
//     },
//     onEnterBack: () => {
//         if (video.paused) {
//             video.play();
//         }
//     },
//     onLeaveBack: () => {
//         if (!video.paused) {
//             video.pause();
//         }
//     }
// });

// select video element
// var vid = document.getElementById('v0');
// vid.pause();
// window.onscroll = function(){
//     vid.pause();
// };
// setInterval(function(){
//     vid.currentTime = window.pageYOffset/400;
// }, 40);


//banner video scrolling
const vid = document.getElementById('v0');
vid.pause();
setInterval(function () {
    const scrollPosition = window.pageYOffset;
    vid.currentTime = scrollPosition / 400;
    const rotationDegree = (scrollPosition / document.body.scrollHeight) * 360; // 360 degrees for a full scroll
    vid.style.transform = `rotate(${rotationDegree}deg)`;
}, 40);

window.onscroll = function () {
    vid.pause();
};




// Elevage iluminality
    // Intersection Observer to detect when elements come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Add visible class with a delay based on the element's position
                const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100); // 100ms delay between each element
            }
        });
    }, {
        threshold: 0.1, // Trigger when even 10% of the element is visible
        rootMargin: '0px 0px -100px 0px' // Trigger slightly before the element comes into view
    });

    // Observe all tags
    document.querySelectorAll('.tag').forEach((tag) => {
        observer.observe(tag);
    });








/* ---------------------------------- */






// console.clear();

// const video = document.querySelector(".video-background");
// let src = video.currentSrc || video.src;
// console.log(video, src);

// function once(el, event, fn, opts) {
//   var onceFn = function (e) {
//     el.removeEventListener(event, onceFn);
//     fn.apply(this, arguments);
//   };
//   el.addEventListener(event, onceFn, opts);
//   return onceFn;
// }

// once(document.documentElement, "touchstart", function (e) {
//   video.play();
//   video.pause();
// });

// gsap.registerPlugin(ScrollTrigger);

// let tl = gsap.timeline({
//   defaults: { duration: 1 },
//   scrollTrigger: {
//     trigger: "#container",
//     start: "top top",
//     end: "bottom bottom",
//     scrub: true
//   }
// });

// once(video, "loadedmetadata", () => {
//   tl.fromTo(
//     video,
//     {
//       currentTime: 0
//     },
//     {
//       currentTime: video.duration || 1
//     }
//   );
// });

// setTimeout(function () {
//   if (window["fetch"]) {
//     fetch(src)
//       .then((response) => response.blob())
//       .then((response) => {
//         var blobURL = URL.createObjectURL(response);

//         var t = video.currentTime;
//         once(document.documentElement, "touchstart", function (e) {
//           video.play();
//           video.pause();
//         });

//         video.setAttribute("src", blobURL);
//         video.currentTime = t + 0.01;
//       });
//   }
// }, 1000);

/* ---------------------------------- */

// Register GSAP ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

// 
// const video = document.querySelector(".video-background");
// const container = document.querySelector("#container");

// 
// function activateVideo(videoElement) {
//   function once(el, event, fn) {
//     const onceFn = function (e) {
//       el.removeEventListener(event, onceFn);
//       fn.apply(this, arguments);
//     };
//     el.addEventListener(event, onceFn);
//   }

//   once(document.documentElement, "touchstart", function () {
//     videoElement.play();
//     videoElement.pause();
//   });
// }

// activateVideo(video);

// 
// function preloadVideo(videoElement) {
//   const src = videoElement.currentSrc || videoElement.src;

//   if (window.fetch) {
//     fetch(src)
//       .then((response) => response.blob())
//       .then((blob) => {
//         const blobURL = URL.createObjectURL(blob);
//         const currentTime = videoElement.currentTime;

//         videoElement.setAttribute("src", blobURL);
//         videoElement.currentTime = currentTime;
//       });
//   }
// }

// preloadVideo(video);

// 
// let videoTimeline = gsap.timeline({
//   scrollTrigger: {
//     trigger: container,
//     start: "top top",
//     end: "bottom bottom",
//     scrub: true,
//   },
// });

//
// video.addEventListener("loadedmetadata", () => {
//   videoTimeline.fromTo(
//     video,
//     { currentTime: 0 },
//     { currentTime: video.duration || 1 }
//   );
// });



  
