  //Slick Slider
  
  $(document).on('ready', function() {
    
    $(".center").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
        breakpoint: 1024,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1
        }
        },
        {
        breakpoint: 800,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1
        }
        }
        
        ]
    });
  });


  
  $(".accordian1").click(function(){
    $("#collapseTwo").removeClass('show');
  });

  $(".accordian2").click(function(){
    $("#collapseOne").removeClass('show');
  });


  //specification popup
  $(".product-specification").click(function() {
    $(".popup").fadeIn(500);
  });
  $(".close").click(function() {
    $(".popup").fadeOut(500);
  });


  //reveal slide up animation
  var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if (
      (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');