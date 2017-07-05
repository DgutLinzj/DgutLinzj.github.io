$(".serial-header > span").on("click",function(){
    location.href = "index.html";
})
$.ajax({
    url:"http://139.199.192.48:9091/api/gettopics",
    type:"get",
    dataType:"json",
    success: function(data){
        console.log(data);
        var serialStr = template("serialTemp",{serialObj:data});
        $(".serial-content ul").html(serialStr);
    }
})