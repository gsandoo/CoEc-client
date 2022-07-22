$(function(){
    //입력박스 숨어있다가
$(".search-input").hide();
$(".search-toggle").change(function() {
              //기타를 선택하면 등장
      if($(".search-toggle").val() == "etc") {
          $(".search-input").show();
          $(".search-toggle").hide();
      }  
  }) 
});
