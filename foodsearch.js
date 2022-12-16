$(document).ready(function(){

    $("#btn1").click(function(){

      $.getJSON("pufood.json", function(result){
        $(".p1").append("商家名稱:"+result[0].景點+"</br>"); 
        $(".p1").append("營業時間:"+result[0].營業時間+"</br>");
        $(".p1").append("特色:"+result[0].特色);
      });
    })
    $("#btn2").click(function(){
        $(".p1").empty();
     })

     $("#btn3").click(function(){

      $.getJSON("pufood.json", function(result){
        $(".p2").append("商家名稱:"+result[1].景點+"</br>"); 
        $(".p2").append("營業時間:"+result[1].營業時間+"</br>");
        $(".p2").append("特色:"+result[1].特色);
      });
    })
    $("#btn4").click(function(){
        $(".p2").empty();
     })
    
     $("#btn5").click(function(){

      $.getJSON("pufood.json", function(result){
        $(".p3").append("商家名稱:"+result[2].景點+"</br>"); 
        $(".p3").append("營業時間:"+result[2].營業時間+"</br>");
        $(".p3").append("特色:"+result[2].特色);
      });
    })
    $("#btn6").click(function(){
        $(".p3").empty();
     })

     $("#btn7").click(function(){

      $.getJSON("pufood.json", function(result){
        $(".p4").append("商家名稱:"+result[3].景點+"</br>"); 
        $(".p4").append("營業時間:"+result[3].營業時間+"</br>");
        $(".p4").append("特色:"+result[3].特色);
      });
    })
    $("#btn8").click(function(){
        $(".p4").empty();
     })
  });
      