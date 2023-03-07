$(document).ready(function(){
     // preloader
     setTimeout(function () {
      $(".preloader").addClass("preloader-hidden")
    }, 2000);



   

/************************************************************************************************** */




//  programs swipers

const qualifiedProg = new Swiper('.qualified-prog .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.qualified-prog .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.qualified-prog .swiper-button-next ',
    prevEl: '.qualified-prog .swiper-button-prev',
  },
  observer: true,
  observeParents: true,
  breakpoints: {
  
    350: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25
    } , 
    1199: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
const developProg = new Swiper('.develop-prog .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.develop-prog .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.develop-prog .swiper-button-next ',
    prevEl: '.develop-prog .swiper-button-prev',
  },
  observer: true,
  observeParents: true,
  breakpoints: {
  
    350: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 2,
      spaceBetween: 25
    } , 
    1199: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
const p4cProg = new Swiper('.p4c-prog .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.p4c-prog .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.p4c-prog .swiper-button-next ',
    prevEl: '.p4c-prog .swiper-button-prev',
  },
  observer: true,
  observeParents: true,
  breakpoints: {
  
    350: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 2,
      spaceBetween: 25
    } , 
    1199: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});



// success-partners swiper

if($(window).width()  < 768 ) {
  const successPartners = new Swiper('.success-partners .swiper', {
    loop: true,
    autoplay: true,
    draggable: true,
   
    pagination: {
      el: '.success-partners .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.success-partners .swiper-button-next ',
      prevEl: '.success-partners .swiper-button-prev',
    },
    observer: true,
    observeParents: true,
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      500: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 20
      } , 
    }
  });
}


// clients reviews swiper 
const clientsReviews = new Swiper('.clients-reviews .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.clients-reviews .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.clients-reviews .swiper-button-next ',
    prevEl: '.clients-reviews .swiper-button-prev',
  },
  breakpoints: {
    350: {
      slidesPerView: 1,
    },
  }
});



// news swiper
const newsSwiper = new Swiper(' .news .swiper', {
  loop: true,
  autoplay: true,
  pagination: {
    el: '.news-parent .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.news-parent .swiper-button-next ',
    prevEl: '.news-parent .swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween : 30 ,
    },
    700: {
      slidesPerView: 2,
      spaceBetween : 30 ,
    },
  }
});




/************************************************************************************************** */

// faq section 

$(".ques-text").click(function(){
  $(this).parent().parent().siblings(".ques-answer").slideToggle(300);
  $(this).siblings(".ques-text-sec i").toggleClass("la-minus");
  $(this).siblings(".ques-text-sec i").toggleClass("la-plus");
  $(this).parent().parent().siblings(".ques-num").toggleClass("active-color-blue");
  $(this).toggleClass("active-color-blue");
  $(this).siblings(".ques-text-sec i").toggleClass("active-color-blue");
  $(".ques-answer").not($(this).parent().parent().siblings(".ques-answer")).slideUp(300);
  $(".ques-num").not($(this).parent().parent().siblings(".ques-num")).removeClass("active-color-blue");
  $(".ques-text-sec i").not($(this).siblings(".ques-text-sec i")).removeClass("active-color-blue");
  $(".ques-text-sec i").not($(this).siblings(".ques-text-sec i")).removeClass("la-minus");
  $(".ques-text-sec i").not($(this).siblings(".ques-text-sec i")).addClass("la-plus");
  $(".ques-text").not($(this)).removeClass("active-color-blue");
})

/************************************************************************************************** */



// counters


let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;


valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-num"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1 ;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});




/************************************************************************************************** */



// open and close nav

let closeBtn = document.querySelector(".closeBtn"); 
let openBtn = document.querySelector(".bars"); 

closeBtn.addEventListener("click" , function(){
  $("nav").removeClass("open-nav");
  $("body").removeClass("body-overflow-hidden");
})

openBtn.addEventListener("click" , function(){
  $("nav").addClass("open-nav");  
  $("body").addClass("body-overflow-hidden");
  $(".account-details").removeClass("show-account-details");
  $(".account-btn").children(".la-user").removeClass("user-color");
})




/************************************************************************************************** */
 

// to top button
$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 500);
}) 


/************************************************************************************************** */



// open search 


$(".open-search-btn").click(function(){
  $(".account-details").removeClass("show-account-details");
  $(".account-btn").children(".la-user").removeClass("user-color");
  $(".search").slideToggle(300);
  $(this).children().toggleClass("la-times");
})


$(".cart").click(function(){
  $(".account-details").removeClass("show-account-details");
  $(".account-btn").children(".la-user").removeClass("user-color");
})





if($(window).width()  < 992 ) {
  $(".account-btn").click(function(){
    $(".account-details").toggleClass("show-account-details");
    $(this).toggleClass("account-btn-color");
    $(this).children(".la-user").toggleClass("user-color");
  })
}



/************************************************************************************************** */


// footer nested menu

if($(window).width() < 768){
  $(".footer-title").click(function(e){
    e.preventDefault() ;
    $(this).next().slideToggle(300) ; 
    $(this).toggleClass("arrow-rotate");
    $(".footer-title").not($(this)).next().slideUp(300);
    $(".footer-title").not($(this)).removeClass("arrow-rotate");
  })
  }
  



/************************************************************************************************** */


// nav nested menu

if($(window).width() <= 992) {
  $(".li-drop > a").click(function (e) {
    e.preventDefault() ;
    $(this).siblings(".ul-drop").slideToggle(300) ;
    $(this).toggleClass("icon-rotate");
    $(".li-drop a").not($(this)).siblings(".ul-drop").slideUp(300);
    $(".li-drop a").not($(this)).removeClass("icon-rotate");
    })
    }
    

/************************************************************************************************** */



//fixed nav

    //~~~~~~~~~ fixed header in mobile
  
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 150) {
          $("header").addClass("fixed");
          $(".open-search-btn i").removeClass("la-times") ;
          $("header").addClass("header-box-shadow");
          $(".account-details").removeClass("show-account-details");
          $(".account-btn").children(".la-user").removeClass("user-color");
          if($(window).width() > 768){
            $(".main-nav").addClass("main-nav-scroll");
          } 
          if($(window).width() > 992){
            $(".logo .moc-logo").addClass("moc-logo-scroll");
            $(".logo .baseera-logo").addClass("baseera-logo-scroll");
            $(".main-nav").addClass("main-nav-scroll");
            $("nav").addClass("nav-scroll")
          } 
          
      } else {
          $("header").removeClass("fixed");
          $("header").removeClass("header-box-shadow");
          if($(window).width() > 768){
            $(".main-nav").removeClass("main-nav-scroll");
          } 
          if($(window).width() > 992){
            $(".logo .moc-logo").removeClass("moc-logo-scroll");
            $(".logo .baseera-logo").removeClass("baseera-logo-scroll");
            $(".main-nav").removeClass("main-nav-scroll");
            $("nav").removeClass("nav-scroll")
          } 
         
          
      }
    });
    var fixedBar = document.querySelector("header"),
    prevScrollposition = $(window).scrollTop();
      
    (window.onscroll = function () {
      var o = $(window).scrollTop();
      prevScrollposition < o && prevScrollposition > 0 ? fixedBar.classList.add("fixsedt") : fixedBar.classList.remove("fixsedt"), (prevScrollposition = o);
    })   
  


// **************************************************************************************************





})  // end of document ready


/************************************************************************************************** */



//  Fire wow 
new WOW().init();


/************************************************************************************************** */


