

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

$(function () {
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

});

$(function () {
    var quantitiy = 0;
    $('.quantity-right-plus').click(function(e){

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());

        // If is not undefined

        $('#quantity').val(quantity + 1);


        // Increment

    });

    $('.quantity-left-minus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        var quantity = parseInt($('#quantity').val());

        // If is not undefined

        // Increment
        if(quantity>0){
            $('#quantity').val(quantity - 1);
        }
    });


});



