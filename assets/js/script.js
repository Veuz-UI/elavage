

// -------smooth scroll-------//



// -------smooth scroll-------//




// -------menu-------//





// -------menu-------//

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

//---counter----//
let counter = document.querySelectorAll(".counter")
let arr = Array.from(counter)

arr.map((item)=>{
    let count = 0

    function CounterUp(){
        count++
        item.innerHTML = count
        if(count == item.dataset.number){
            clearInterval(stop);
        }
    }
    let stop = setInterval(
        function(){
            CounterUp();
        },100/item.dataset.speed
    );
})

//---rotation----//
// let angle = 0; function rotateImage() { 
//     angle = (angle + 1) % 180; 
//     document.getElementById('image').style.transform = `rotate(${angle}deg)`; 
//   } setInterval(rotateImage, 10);


// let goingUp = true; function jumpImage() { 
//     const image = document.getElementById('image'); if (goingUp) { image.style.top = '0';
//      } else { 
//         image.style.top = '50%'; 
//     } goingUp = !goingUp; 
// } setInterval(jumpImage, 1000);

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




  