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
    var dataLength;

    $('label').click(function () {
        if ($('input', this).is(':checked')) {
            $(this).css('color', '#ff5912');
        } else {
            $(this).css('color', '#34404b');
        }
    });
    function addItems(where, count, startingNum) {
        var cont = $(where);
        $.ajax({
            dataType: "json",
            url: "databass/database.json",
            success: function (data) {
                $.each(data, function(key, value){
                        if (key>=startingNum && key<startingNum+count) {
                            var elem = `<div class="col-sm-6 col-md-3 cols" style="min-height: 0">
                                <div class="section">
                                    <div class="goods">
                                        <img src="${value["img"]}" alt="jacket">
                                        <h4>${value["name"]}</h4>
                                        <p>${value["price"]}$</p>
                                    </div>
                                    <div class="hovergoods">
                                        <img src="${value["img"]}" alt="jacket">
                                        <h4>Reebok Track Jacket</h4>
                                        <p>sizes&#8195;:&#8195;`;
                            for (let i = 0; i < value["sizes"].length; i++) {
                                if (i < value["sizes"].value - 1)
                                    elem += value["sizes"][i] + ` -`;
                                else
                                    elem += value["sizes"][i];
                            }

                            elem += `</p>`;
                            for (let i = 0; i < value["colors"].length; i++) {
                                elem += `<span style="background: ` + value["colors"][i] + `"></span> `;
                            }
                            elem += `<hr>
                                        <div class="hovericons">
                                            <a href="#"><i class="iconmoon icons-planet-earth"></i></a>
                                            <a href="#"><i class="iconmoon icons-commerce"></i></a>
                                            <a href="#"> <i class="iconmoon icons-heart"></i></a>
                                        </div>
                                    </div>
                                </div></div>`;
                            cont.html(cont.html() + elem);
                        }
                    });
                dataLength =  Object.keys(data).length;


                var new_elems = $(".new-arrivals > div");
                $.each(new_elems, function (key, value) {
                    if (key+((dataLength - key)/count>1?count:dataLength%count) > new_elems.length - 1){
                        $(value).hide().slideDown();
                    }
                });
            }

        });

    }
    addItems(".new-arrivals", 4, 0);
    $(".addarrivals a").on("click", function(){
        addItems(".new-arrivals", 4, $(".new-arrivals").children().length);
        if (dataLength <= $(".new-arrivals").children().length+4)
            $(".addarrivals").hide();

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



