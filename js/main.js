

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

    function addItems(where, count, startingNum) {
        var cont = $(where);
        $.ajax({
            dataType: "json",
            url: "databass/database.json",
            success: function (data) {
                console.log(1);
                $.each(data, function(key, value){
                        if (key>=startingNum && key<startingNum+count) {
                            var elem = `<div class="col-sm-6 col-md-3 cols">
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
                            for (let i = 0; i < value["sizes"].size(); i++) {
                                if (i < value["sizes"].size() - 1)
                                    elem += value["sizes"][i] + ` -`;
                                else
                                    elem += value["sizes"][i];
                            }

                            elem += `</p>`;
                            for (let i = 0; i < value["colors"].size(); i++) {
                                elem += `<span style="backgound:"` + value["colors"][i] + `"></span>`;
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

            }
        });
        // $.getJSON("databass/database.json", function (data) {
        //     console.log(1);
        //     $.each(data, function(key, value){
        //         if (key>=startingNum && key<startingNum+count) {
        //             var elem = `<div class="col-sm-6 col-md-3 cols">
        //                 <div class="section">
        //                     <div class="goods">
        //                         <img src="${value["img"]}" alt="jacket">
        //                         <h4>${value["name"]}</h4>
        //                         <p>${value["price"]}$</p>
        //                     </div>
        //                     <div class="hovergoods">
        //                         <img src="${value["img"]}" alt="jacket">
        //                         <h4>Reebok Track Jacket</h4>
        //                         <p>sizes&#8195;:&#8195;`;
        //             for (let i = 0; i < value["sizes"].size(); i++) {
        //                 if (i < value["sizes"].size() - 1)
        //                     elem += value["sizes"][i] + ` -`;
        //                 else
        //                     elem += value["sizes"][i];
        //             }
        //
        //             elem += `</p>`;
        //             for (let i = 0; i < value["colors"].size(); i++) {
        //                 elem += `<span style="backgound:"` + value["colors"][i] + `"></span>`;
        //             }
        //             elem += `<hr>
        //                         <div class="hovericons">
        //                             <a href="#"><i class="iconmoon icons-planet-earth"></i></a>
        //                             <a href="#"><i class="iconmoon icons-commerce"></i></a>
        //                             <a href="#"> <i class="iconmoon icons-heart"></i></a>
        //                         </div>
        //                     </div>
        //                 </div></div>`;
        //             cont.html(cont.html() + elem);
        //         }
        //     });
        // });
    }

    addItems(".new-arrivals", 4, 0);
});
