

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
    nav: false,
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
    nav: false,
    rtl:true,
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

//banner video scrolling
const vid = document.getElementById('v0');
vid.pause();
setInterval(function () {
    const scrollPosition = window.pageYOffset;
    vid.currentTime = scrollPosition / 400;
    const rotationDegree = (scrollPosition / document.body.scrollHeight) * 180; 
    vid.style.transform = `rotate(${rotationDegree}deg)`;
}, 150);

window.onscroll = function () {
    vid.pause();
};


// Elevage gravity
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
//         setTimeout(() => {
//           entry.target.classList.add('visible');
//         }, index * 100);
//     }
//   });
// }, {
//     threshold: 0.1,
//     rootMargin: '0px 0px -100px 0px' 
// });

//   document.querySelectorAll('.tag').forEach((tag) => {
//     observer.observe(tag);
// });





// Create the tags' float animation
// const tags = document.querySelectorAll('.tag');

// // Spread tags randomly
// tags.forEach((tag) => {
//   const randomX = gsap.utils.random(-200, 200);
//   const randomY = gsap.utils.random(-100, 100);
//   const randomDelay = gsap.utils.random(0.1, 2);

//   gsap.fromTo(
//     tag,
//     { x: randomX, y: randomY, scale: 0 },
//     { 
//       x: 0, 
//       y: 0, 
//       scale: 1, 
//       opacity: 1, 
//       duration: 1.5, 
//       delay: randomDelay, 
//       ease: 'elastic.out(1, 0.3)' 
//     }
//   );
// });

// // Add gravity-like floating effect
// tags.forEach((tag) => {
//   const floatingAnimation = gsap.to(tag, {
//     y: '+=20',
//     repeat: -1,
//     yoyo: true,
//     ease: 'power1.inOut',
//     duration: gsap.utils.random(2, 4),
//   });

//   // Stop float effect on hover
//   tag.addEventListener('mouseenter', () => floatingAnimation.pause());
//   tag.addEventListener('mouseleave', () => floatingAnimation.play());
// });



const tags = document.querySelectorAll('.tag');

tags.forEach((tag, index) => {
  gsap.to(tag, {
    duration: 1,
    opacity: 1,
    scale: 1,
    delay: index * 0.1,
    ease: "power3.out",
  });
});

tags.forEach((tag) => {
  tag.addEventListener('mouseenter', () => {
    gsap.to(tag, {
      y: 20, 
      duration: 0.2,
      ease: "power3.in",
    });
  });

  tag.addEventListener('mouseleave', () => {
    gsap.to(tag, {
      y: 0,
      duration: 0.2,
      ease: "power3.out",
    });
  });
});


// Touch btn Anim
const icon = document.querySelector('.ab-btn-in .icon');
const button = document.querySelector('.ab-btn-in a');

icon.addEventListener('mouseenter', () => {
  button.style.opacity = '1';
  button.style.transform = 'translateX(0)';
  button.style.pointerEvents = 'auto';
  icon.style.transform = 'translateX(40px)';
});

icon.addEventListener('mouseleave', () => {
  button.style.opacity = '0';
  button.style.transform = 'translateX(20px)';
  button.style.pointerEvents = 'none';
  icon.style.transform = 'translateX(0)';
});





