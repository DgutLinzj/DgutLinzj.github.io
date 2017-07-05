$(".features-header > span").on("click",function(){
    location.href = "index.html";
})
$.ajax({
    url: "http://139.199.192.48:9091/api/getlianzai",
    type:"get",
    dataType:"json",
    success: function(data){
        console.log(data);
        var featStr = template("featTemp",{featObj:data});
        $(".features-content").html(featStr);
    }
})