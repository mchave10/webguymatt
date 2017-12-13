$(document).ready(function(){
    $(window).on("scroll", function(){
        console.log($(".navbar").height());
        if($(this).scrollTop() > $(".navbar").height()) {
            $(".navbar").addClass("stickynav pulse");
        } 
        else {
            $(".navbar").removeClass("stickynav pulse");
        }    
    });
    //About Me animations
    $(".mattbouncearrow, .aboutmetoggle").click(function(){
        setTimeout(function(){
            $("html,body").css("overflow-y","visible");
        }, 100);  
        $("#aboutMe").css("display","flex");
        $("#aboutMe").removeClass("nunya");
        $("html,body").animate({
            scrollTop: $("#aboutMe").offset().top
        }, 500, 'swing');
        setTimeout(function(){
            $(".taxi").addClass("shake bounce");   
        }, 1000);     
        setTimeout(function(){
            $(".taxi").addClass("slideOutRight");  
         }, 1500);     
        setTimeout(function(){
            $(".taxi").css("display","none"); 
            $(".aboutContent").fadeIn();
         }, 2200);    
        
        return false;
        
    });
});
