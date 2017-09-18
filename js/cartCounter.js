/**
 * Created by user on 18.09.2017.
 */
$(function(){
    function renewItemsCnt (){
        var cartIcon = $(".sh-cart-icon");
        var itemsCnt = $(".sh-items-cnt");
        if (itemsCnt.attr("data-items-cnt") !== "0"){
            console.log("show");
            itemsCnt.removeClass("sh-cart-empty");
            cartIcon.css("color", "");
        }
        else{
            itemsCnt.addClass("sh-cart-empty");
            cartIcon.css("color", "#ff5912");
        }
    }
    renewItemsCnt();
});