$("header > .icon-menu").on("click", function () {
    $(".left-menu").css({
        transition: "transform 0.5s",
        transform: "translateX(0px)",
    });
    $(".mask").css({
        display: "block",
    });
    $(".layout").css({
        transition: "transform 0.5s",
        transform: "translateX(55%)"
    });
});
$(".mask").on("click", function () {
    $(".left-menu").css({
        transition: "transform 0.5s",
        transform: "translateX(-100%)"
    });
    $(".mask").css({
        display: "none",
    });
    $(".layout").css({
        transition: "transform 0.5s",
        transform: "translateX(0px)"
    });
});
// 轮播图请求数据 
$.ajax({
    url: "http://139.199.192.48:9091/api/getlunbo",
    type: "get",
    dataType: "json",
    success: function (data) {
        // console.log(data);
        var str = template("carouselTemp", { carouselObj: data });
        // console.log(str);
        $(".hl-carousel > .carousel").html(str);
        $(".carousel-indicators >li").eq(0).addClass('active');
        $(".carousel-inner >.item").eq(0).addClass('active');
    }
})
$.ajax({
    url:"http://139.199.192.48:9091/api/gethometab/1",
    type:"get",
    success: function(data){
        var tabStr = template("tabTemp",{tabObj:data}) ;
        
        $("#add-continue > ul").html(tabStr);
    }
})

$(".add-end").on("click",function(){
    $.ajax({
        url: "http://139.199.192.48:9091/api/gethometab/2",
        success: function(data){
            var tabStr = template("tabTemp",{tabObj:data}) ;
            // console.log(tabStr);
            $("#add-end > ul").html(tabStr);
        }
    })
});

$(".recom-continue").on("click",function(){
    $.ajax({
        url: "http://139.199.192.48:9091/api/gethometab/3",
        success: function(data){
            var tabStr = template("tabTemp",{tabObj:data}) ;
            // console.log(tabStr);
            $("#recom-continue > ul").html(tabStr);
        }
    })
})

$(".recom-end").on("click",function(){
    $.ajax({
        url: "http://139.199.192.48:9091/api/gethometab/4",
        success: function(data){
            var tabStr = template("tabTemp",{tabObj:data}) ;
            // console.log(tabStr);
            $("#recom-end > ul").html(tabStr);
        }
    })
})