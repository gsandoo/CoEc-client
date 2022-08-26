// const register = document.querySelector('.register-btn');
// register.addEventListener("click",showPopupRegister);



  document.querySelector("#close").addEventListener("click",close);
  document.querySelector("#close-2").addEventListener("click",close2);
  document.querySelector("#close-3").addEventListener("click",close3);


  function showPopup (id) {
    const infor = document.querySelector(".information");
    const uploadAt = document.querySelector(".uploadAt");
    const dateWant = document.querySelector(".date-want");
    const ageGender = document.querySelector(".ageGender");
    const sportsName = document.querySelector(".sports-name");
    const memberCount = document.querySelector(".member-count");
    const place = document.querySelector(".place-name");
    const schedule = document.querySelector(".schedule-date");
    const balloon = document.querySelector('.balloon');

    console.log(id )
    
    // axios 로 데이터 받아오기
    const response =  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{
      const data = (res.data);
      for (let i = 0 ; i < data.length ; i++){
        if(id == data[i].id){
          console.log("id 는 " + id + " 이고 데이터id 는 " + data[i].id + " 입니다.")
          document.querySelector(".background").className = "background show";
          infor.innerHTML=`${data[i].contents}`
          uploadAt.innerHTML=`${data[i].date}`
          dateWant.innerHTML=`${data[i].id}`
          ageGender.innerHTML=`${data[i].ageWanted}`+`${data[i].genderWanted}`
          sportsName.innerHTML=`${data[i].sportsName}`
          memberCount.innerHTML=`${data[i].headCount}`
          place.innerHTML=`${data[i].place}`
          schedule.innerHTML=`${data[i].startDate}`+`${data[i].endDate}`
          balloon.innerHTML=`<h4>${data[i].Contents}</h4>`
        }
      }
    })     
  }

  function close () { 
    document.querySelector(".background").className = "background";
  }
  function close2 () { 
    document.querySelector(".background-2").className = "background-2";
  }

  function close3 () { 
    document.querySelector(".background-register").className = "background-register";
  }
  // 신청팝업2
  function showPopup2(){
    document.querySelector(".background").className = "background";
    document.querySelector(".background-2").className = "background-2 show";
  }
  
  // function showPopupRegister(){
  //   document.querySelector(".background-register").className = "background-register show";
  //   const _myIndexNumber = 0;
    
  // }


  function openPopup(){
    document.querySelector(".background-2").className = "background-2";
    document.querySelector(".background").className = "background show";

  }
  

  function activeNext(){
    const one= document.querySelector("#1");
    const two= document.querySelector("#2");
    const three= document.querySelector("#3");
    const four= document.querySelector("#4");
    const five= document.querySelector("#5");
    const six= document.querySelector("#6");
    const seven= document.querySelector("#7");
    const eight= document.querySelector("#8");
    const nine= document.querySelector("#9");

    
}

function getDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  } 

  if(mm<10) {
      mm = '0'+mm
  } 

  today = yyyy + '-' + mm + '-' + dd;
  console.log(today);
  document.getElementById("select-date").setAttribute('min',today);
  document.getElementById("select-date").value = today;
}

window.onload = function() {
  getDate();
};