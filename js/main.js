

$(function(){
    'use strict';

    $('#header').load('header.html', function () {
        function renewItemsCnt (){
            var cartIcon = $(".sh-cart-icon");
            var itemsCnt = $(".sh-items-cnt");
            if (itemsCnt.attr("data-items-cnt") !== "0"){
                console.log("show");
                itemsCnt.removeClass("sh-cart-empty");
            }
            else{
                itemsCnt.addClass("sh-cart-empty");
            }
        }
        renewItemsCnt();

        $(".shtorka").on("click", function () {
            $(".mobile-menu").slideToggle();
            $(".shtorka .fa-times").toggleClass("hidden");
            $(".shtorka .fa-angle-down").toggleClass("hidden");
        });
    });
    $('#footer').load('footer.html');

});
