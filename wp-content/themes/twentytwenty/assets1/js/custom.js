$(function() {
    var header = $(".main-header");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
  
});

// Lightbox Video
$('.lightbox-toggle').on('click', (event) => {
  event.preventDefault();
  let content = $(event.currentTarget).attr('data-lightbox-content');
    $('.lightbox-column').append(`
        <div class="lightbox-video">
        <iframe src="${content}" frameborder="0" allowfullscreen allow='autoplay'> </iframe>
        </div>`);
        $(".lightbox").show();
        console.log($(".lightbox"));
});

$('.lightbox-close').on('click', (event) => {
  event.preventDefault();
  $('.lightbox-column > *').remove();
  $(".lightbox").hide();
});

// testimonials slider

$('.slick-testimonials').slick({
  infinite: true,
  loop:true,
  autoplay:true,
  slidesToShow: 1, // Shows a three slides at a time
  slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
  arrows: false, // Adds arrows to sides of slider
  dots: false // Adds the dots on the bottom
});

$('.team-testimonials').slick({
  infinite: true,
  loop:true,
  autoplay:true,
  slidesToShow: 4, // Shows a three slides at a time
  slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
  margin:10,
  arrows: false, // Adds arrows to sides of slider
  dots: false, // Adds the dots on the bottom
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.client-testimonials').slick({
  infinite: true,
  loop:true,
  autoplay:true,
  slidesToShow: 6, // Shows a three slides at a time
  slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
  margin:10,
  arrows: false, // Adds arrows to sides of slider
  dots: false, // Adds the dots on the bottom
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// testimonials slider

// case-study masonry

$('.grid').masonry({
	
  itemSelector: '.grid-item'
});

// case-study masonry

// about year counter
// $(document).ready(function(){
//   $('.counter-count').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
      
//       //chnage count up speed here
//         duration: 2000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
//   });
// });
$(document).ready(function() {
  checkDisplay('ab-count');
  checkDisplay('year-count');

$(window).on('resize scroll', function() {
  checkDisplay('ab-count');
  checkDisplay('year-count');
});
});

function checkDisplay(classname){
$('.'+classname).each(function() {
    var $this = $(this);
    if ($this.isOnScreen()) {
      var countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum: countTo
      }, {
        duration: 4000,
        easing: 'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }
      });
    }
  });
}
// about year counter

// about happy customer counter
/*
function checkDisplay(){
  $('.ab-count').each(function() {
      var $this = $(this);
      if ($this.isOnScreen()) {
        var countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 4000,
          easing: 'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
      }
    });
  }


  */
// about happy customer counter