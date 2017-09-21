$(function () {
    'use strict';

    $('#header').load('header.html', function () {
        function renewItemsCnt() {
            var cartIcon = $(".sh-cart-icon");
            var itemsCnt = $(".sh-items-cnt");
            if (itemsCnt.attr("data-items-cnt") !== "0") {
                console.log("show");
                itemsCnt.removeClass("sh-cart-empty");
            }
            else {
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

    $('label').click(function () {
        if ($('input', this).is(':checked')) {
            $(this).css('color', '#ff5912');
        } else {
            $(this).css('color', '#34404b');
        }
    });

    $("#slider").slider({
        min: 0,
        max: 1000,
        values: [0, 1000],
        range: true,
        stop: function (event, ui) {
            $("input#minCost").val($("#slider").slider("values", 0));
            $("input#maxCost").val($("#slider").slider("values", 1));
        },
        slide: function (event, ui) {
            $("input#minCost").val($("#slider").slider("values", 0));
            $("input#maxCost").val($("#slider").slider("values", 1));
        }
    });

    $("input#minCost").change(function () {
        var value1 = $("input#minCost").val();
        var value2 = $("input#maxCost").val();
        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            $("input#minCost").val(value1);
        }
        $("#slider").slider("values", 0, value1);
    });
    $("input#maxCost").change(function () {
        var value1 = $("input#minCost").val();
        var value2 = $("input#maxCost").val();
        if (value2 > 1000) {
            value2 = 1000;
            jQuery("input#maxCost").val(1000)
        }
        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            $("input#maxCost").val(value2);
        }


    });

});