$(function(){
    
$(".search-toggle").change(function() {
              //기타를 선택하면 등장
      if($(".search-toggle").val() == "etc") {     
          $(".search-box").css("display","none");
          $(".search-box-input").css("display","flex");
      }  
  }) 
});

// 검색

const query = document.querySelector('.query');


function onQuerySelected(){
    const querySelect = document.querySelector('.search-toggle');
    const query = querySelect.options[querySelect.selectedIndex].value;
    console.log(query);
    if(query == "etc"){
        const inputValue = document.querySelector('.search-input');
        
    }
    
};

function onChange(e){
   console.log(e.value);
};