$(function(){
  var $nav = $('.navbar-default');
  var $navHeight = $nav.height();
  var $navLink = $('.nav li a');
  var $container = $('#container');
  var $navWrap = $('#nav-wrap');
  var $navWrapOffset = $navWrap.scrollTop()+60;
  $(window).resize(function(){
    var $cOffset = $container.offset();
    var $offsetLeft = $cOffset.left;
    var $navWidth = $nav.width();
    
    var $window = $(window);
    var lastScroll = 0;
      $(window).scroll(function() {
          $winTop = $window.scrollTop();
          var $dir = ($winTop > lastScroll) ? "down" : "up";
          $cOffset = $('#nav-wrap').offset();
          $offsetLeft = $cOffset.left;
        var $upTop = $winTop-10;
          $navWrap.css('height', $navHeight);
          if($winTop > $navWrapOffset && $dir == "down"){
            $nav.addClass('fixed').css({
              'top': "0px",
              'left': $offsetLeft+"px"
            });
          }else if($upTop < $navWrapOffset && $dir == "up"){
            $nav.removeClass('fixed').css({
              'top': "52px",
              'left': "0px"
            });
          }
      });
  })
  $(window).resize();
  $navLink.click(function(){
    var $this = $(this);
    var $url = $this.data('scroll');
    console.log($url)
    $.scrollTo( '#'+$url, 500 );
  })
})