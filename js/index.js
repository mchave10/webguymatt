$(document).ready(function(){
    function shakeTaxi() {
        setTimeout(function(){
            $(".taxi").addClass("shake bounce");   
        }, 1000);     
    }
    function slideOutTaxi() {
        setTimeout(function(){
            $(".taxi").addClass("slideOutRight");  
         }, 2200);     
    }
    $(".mattbouncearrow").click(function(){
        setTimeout(function(){
            $("html,body").css("overflow-y","visible");
        }, 100);  
        var nextSection = $(this).parents().next('section')
        nextSection.fadeIn();
        $("html,body").delay(1000).animate({
            scrollTop: nextSection.offset().top
        }, 500, 'swing');
        shakeTaxi();                                               
        slideOutTaxi();                          
        slideIn
    });
});
