
$(document).ready(function(){


    $(document).on("scroll", function(){
        if
            ($(document).scrollTop() > 50){
                $(".header").addClass("shrink");
            }
        else
            {
                $(".header").removeClass("shrink");
            }
    })

    $(document).on("scroll", function(){
        if
            ($(document).scrollTop() > 50){
                $(".header-menu__logo").addClass("shrink-logo");
            }
        else
            {
                $(".header-menu__logo").removeClass("shrink-logo");
            }
    })
});