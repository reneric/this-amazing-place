$(function(){
  var video = $('#video');
  var $nav = $('.navbar-default');
  var $navHeight = $nav.height();
  var $navLink = $('.nav li a');
  var $container = $('#container');
  var $navWrap = $('#nav-wrap');
  var $navWrapOffset = $navWrap.scrollTop()+60;
  var winheight = $(window).height() / 2;
  var winwidth = $(window).width() / 2;
  video.css({
    "top":winheight-165+'px',
    "left":winwidth-340+'px'
  })
  setTimeout(function(){
    $('#pages div.page#intro').add('#pages div.page#event div.left_col h1').css('opacity',1);
  },1500)
  $('#pages div.page#intro').add('#pages div.page#event div.left_col h1').cssBackgroundReady(function () {
    console.log('this line is executed just once');
    this.each(function () {
        $(this).css('opacity', 1);  
    });
});
  $(window).resize(function(){
    var $cOffset = $container.offset();
    var $offsetLeft = $cOffset.left;
    var $navWidth = $nav.width();
    
    var $window = $(window);
    var lastScroll = 0;
    if($(window).width() > 728){
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
    }
  })
  $(window).resize();
  $navLink.click(function(){
    if($(window).width() < 728){
      $('.navbar-toggle').trigger('click');
    };
    var $this = $(this);
    var $url = $this.data('scroll');
    console.log($url)
    $.scrollTo( '#'+$url, 500 );
  })

var modal = $('#modal');
var vp = $('#video');
var x = $('span.x');
$('#play').on('click',function(ev){
  ev.preventDefault();
  x.addClass('on');
  modal.addClass('on');
  vp.addClass('on').css({
    'overflow': 'visible',
    'height':'auto'});
})
$('#modal, .x').on('click',function(ev){
  ev.preventDefault();
  x.removeClass('on');
  modal.removeClass('on');
  vp.addClass('hide').removeClass('on').css({
    'overflow': 'hidden',
    'height':'0px'}).removeClass('hide').css({
        'overflow': 'hidden',
        'height':'0'});
})


    var f = $('iframe'),
    url = f.attr('src').split('?')[0],
    status = $('.status');

// Listen for messages from the player
if (window.addEventListener){
    window.addEventListener('message', onMessageReceived, false);
}
else {
    window.attachEvent('onmessage', onMessageReceived, false);
}

// Handle messages received from the player
function onMessageReceived(e) {
    var data = JSON.parse(e.data);
    
    switch (data.event) {
        case 'ready':
            onReady();
            break;
           
        case 'playProgress':
            onPlayProgress(data.data);
            break;
            
        case 'pause':
            onPause();
            break;
           
        case 'finish':
            onFinish();
            break;
    }
}

// Call the API when a button is pressed
$('button').on('click', function() {
    post($(this).text().toLowerCase());
});

// Helper function for sending a message to the player
function post(action, value) {
    var data = { method: action };
    
    if (value) {
        data.value = value;
    }
    
    f[0].contentWindow.postMessage(JSON.stringify(data), url);
}

function onReady() {
    status.text('ready');
    
    post('addEventListener', 'pause');
    post('addEventListener', 'finish');
    post('addEventListener', 'playProgress');
}

function onPause() {
    status.text('paused');
}

function onFinish() {
    status.text('finished');
}

function onPlayProgress(data) {
    status.text(data.seconds + 's played');
}

})