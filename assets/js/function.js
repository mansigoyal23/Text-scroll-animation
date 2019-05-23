//get in touch button
var currentMousePos = { x: -1, y: -1 };
$('.button-hover-area').mousemove(function(event) {
    currentMousePos.x = event.pageX;
    currentMousePos.y = event.pageY;
    console.log("X", currentMousePos.x , "Y", currentMousePos.y);

    var leftPosition = (currentMousePos.x) / 10;
    var topPosition = (currentMousePos.y) / 10;

    $('.circle').css({'left':leftPosition, 'top':topPosition});
});

//water ripple effect
$('.demo').ripples({
    imageUrl: null,
    resolution: 256,
    dropRadius: 20,
    perturbance: 0.04,
    interactive: true,
    crossOrigin: ''
});

//on hover text transform scale
$(document).ready(function(){
    $('.fs-parallex-effect').each(function(){
        var splitText =  $(this).find('.parallex-title').text();        

        for (var i = 0; i < splitText.length; i++) {
            $(this).find('.parallex-title').append('<span class="letter"><span>'+splitText.charAt(i)+'</span></span>');
        }

        $('.parallex-title .letter').each(function(){
            var letterVal = $(this).text();
            if(letterVal == " "){
                $(this).addClass('space');
            }
        });
        var letterLength = $('.parallex-title').children('.letter').length;        
        var transitionTime = (0.3)/(letterLength);

        for(k = 1; k <= letterLength; k++){
            $('.letter:nth-child('+k+')').css('animation-duration',transitionTime+'s');
            transitionTime = transitionTime + 0.04;
        }
    });
});

//left and right move text with scroll
var lastScrollTop = 0;
var leftMove = 0; var rightMove = 0;

$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
       leftMove = leftMove + 5;
       $('.left-side').find('.parallex-title').css({"transform": "translate3d(" + -leftMove + "px, 0px,  0px)"});
       
       rightMove = rightMove - 5;
       $('.right-side').find('.parallex-title').css({"transform": "translate3d(" + -rightMove + "px, 0px,  0px)"});
   }
   else{
        leftMove = leftMove - 5;
        $('.left-side').find('.parallex-title').css({"transform": "translate3d(" + -leftMove + "px, 0px,  0px)"});

        rightMove = rightMove + 5;    
       $('.right-side').find('.parallex-title').css({"transform": "translate3d(" + -rightMove + "px, 0px,  0px)"});
   }
   lastScrollTop = st;
});