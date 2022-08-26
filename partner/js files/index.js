


//필터링 체크기능 추가 

function checked(obj){ //체크하기
    obj.document.querySelector('.filter-button').selected=true;
}
function unChecked(obj){//체크해제
    obj.document.querySelector('.filter-button').selected=false;
}


const fButtonAll = document.querySelectorAll('.filter-button');

fButtonAll.forEach(function(el){
    el.addEventListener('click' , function(e){
        console.log(e.target.value)
        if(e.target.document.querySelector('.filter-button').selected !== true){
            fButtonAll.forEach(function(obj){
                checked(obj);
            })
        }else{
            fButtonAll.forEach(function(obj){
                unChecked(obj);
            })
        }
    })
})



// 필터링
// const $extraFliter = document.querySelector('.more-button');
// const $filerHeight = document.querySelector('#filter').offsetHeight;

// // 더보기 눌렀을 시 요소 크기 증가 시키기 (여기 구현해야함)
// function filterClick(){
//     console.log($filerHeight)
//     if($filerHeight==69){
//         $filerHeight==130
//     }
// }


// axios 연결

// 여기가 html 데이터 받아올 공간. searchPosts


// function getSearchParams(){
//     const response = axios.get('https://jsonplaceholder.typicode.com/users')
//     .then(res=> console.log(res.data[0].name))
    
    
// }

// getSearchParams();


// function actions(data){
//     for(let i = 0 ; i < data.length ; i++){
//         console.log(data)

//         // 이 부분을 html 구조 짜서 값을 넣으시면 되어요 !
    
    
    
//     // const item = `
//     // <div>
//     //   <span>${data[0].name}</span>
//     //   <span>${data[1].name}</span>
//     //   <span>${data[2]}</span>
//     //   <span>${data[3]}</span>
//     //   <span>${data[4]}</span>
//     // </div>
    
    
//     // // `;
//     $searchPosts.insertAdjacentHTML('beforeend',item);
//     }
// }





    // 검색 기타눌렀을시
    
    function onQuerySelected(){
        const querySelect = document.querySelector('.search-toggle');
        const query = querySelect.options[querySelect.selectedIndex].value;
        console.log(query);
        if(query == "etc"){
            const searchSection = document.querySelector('.search-section');
            searchSection.style.display="none"
            const etc = document.querySelector('.etc');
            etc.style.display="flex";
            const searchInput= document.querySelector('.search-input');
            searchInput.name="etcValue";
        }
        
        else return;
    };

    

    // 기타 input 검색어  함수
    function onChange(e){
       console.log(e.value);
    };

    

    function femaleButton(event){
      let result = '';
      const fButton = document.querySelector('.femaleBtn');
      if(event.target.checked)  {
        result = event.target.value;
        console.log(result);
        fButton.style.backgroundColor="cornflowerblue";
        fButton.style.color="#ffffff";
      }else if(event.target.checked==false) {
        result = '';
        fButton.style.backgroundColor="#ffffff";
        fButton.style.color="#999999";

    }
  }

  function maleButton(event){
    let result = '';
    const mButton = document.querySelector('.maleBtn');
    if(event.target.checked)  {
      result = event.target.value;
      console.log(result);
      mButton.style.backgroundColor="cornflowerblue";
      mButton.style.color="#ffffff";
    }else if(event.target.checked==false) {
      result = '';
      mButton.style.backgroundColor="#ffffff";
      mButton.style.color="#999999";

  }
}
   

    // 활동장소 버튼 클릭시 

    function sidoGetCheckboxValue(event)  {
        let result = '';
        const sidoButton = document.querySelector('.sido');
        if(event.target.checked)  {
          result = event.target.value;
          console.log(result);
          sidoButton.style.backgroundColor="cornflowerblue";
          sidoButton.style.color="#ffffff";
        }else if(event.target.checked==false) {
          result = '';
          sidoButton.style.backgroundColor="#ffffff";
          sidoButton.style.color="#999999";
        }
    }


    

    function gunguGetCheckboxValue(event)  {
        let result = '';
        const gunguButton = document.querySelector('.gungu');
        if(event.target.checked)  {
          result = event.target.value;
          console.log(result);
          gunguButton.style.backgroundColor="cornflowerblue";
          gunguButton.style.color="#ffffff";
        }else if(event.target.checked==false) {
          result = '';
          gunguButton.style.backgroundColor="#ffffff";
          gunguButton.style.color="#999999";
        }
    }

    function eupmyunGetCheckboxValue(event)  {
        let result = '';
        const eupmyunButton = document.querySelector('.eupmyun');
        if(event.target.checked)  {
          result = event.target.value;
          console.log(result);
          eupmyunButton.style.backgroundColor="cornflowerblue";
          eupmyunButton.style.color="#ffffff";
        }else if(event.target.checked==false) {
          result = '';
          eupmyunButton.style.backgroundColor="#ffffff";
          eupmyunButton.style.color="#999999";
        }
    }








    // 활동요일 클릭시
    function monOnClick(event)  {
        let result = '';
        const monButton = document.querySelector('.mon');
        if(event.target.checked)  {
          result = event.target.value;
          console.log(result);
          monButton.style.backgroundColor="cornflowerblue";
          monButton.style.color="#ffffff";
        }else if(event.target.checked==false) {
          result = '';
          monButton.style.backgroundColor="#ffffff";
          monButton.style.color="#999999";
        }
    }



    function tueOnClick(event)  {
        let result = '';
        const tueButton = document.querySelector('.tue');
        if(event.target.checked)  {
          result = event.target.value;
          console.log(result);
          tueButton.style.backgroundColor="cornflowerblue";
          tueButton.style.color="#ffffff";
        }else if(event.target.checked==false) {
          result = '';
          tueButton.style.backgroundColor="#ffffff";
          tueButton.style.color="#999999";
        }
    }


    function wedOnClick(event)  {
        let result = '';
        const wedButton = document.querySelector('.wed');
        if(event.target.checked)  {
          result = event.target.value;
          console.log(result);
          wedButton.style.backgroundColor="cornflowerblue";
          wedButton.style.color="#ffffff";
        }else if(event.target.checked==false) {
          result = '';
          wedButton.style.backgroundColor="#ffffff";
          wedButton.style.color="#999999";
        }
    }


    function thuOnClick(event)  {
        let result = '';
        const thuButton = document.querySelector('.thu');
        if(event.target.checked)  {
          result = event.target.value;
          console.log(result);
          thuButton.style.backgroundColor="cornflowerblue";
          thuButton.style.color="#ffffff";
        }else if(event.target.checked==false) {
          result = '';
          thuButton.style.backgroundColor="#ffffff";
          thuButton.style.color="#999999";
        }
    }


    function friOnClick(event)  {
        let result = '';
        const friButton = document.querySelector('.fri');
        if(event.target.checked)  {
          result = event.target.value;
          console.log(result);
          friButton.style.backgroundColor="cornflowerblue";
          friButton.style.color="#ffffff";
        }else if(event.target.checked==false) {
          result = '';
          friButton.style.backgroundColor="#ffffff";
          friButton.style.color="#999999";
        }
    }


    function satOnClick(event)  {
        let result = '';
        const satButton = document.querySelector('.sat');
        if(event.target.checked)  {
          result = event.target.value;
          console.log(result);
          satButton.style.backgroundColor="cornflowerblue";
          satButton.style.color="#ffffff";
        }else if(event.target.checked==false) {
          result = '';
          satButton.style.backgroundColor="#ffffff";
          satButton.style.color="#999999";
        }
    }


    function sunOnClick(event)  {
        let result = '';
        const sunButton = document.querySelector('.sun');
        if(event.target.checked)  {
          result = event.target.value;
          console.log(result);
          sunButton.style.backgroundColor="cornflowerblue";
          sunButton.style.color="#ffffff";
        }else if(event.target.checked==false) {
          result = '';
          sunButton.style.backgroundColor="#ffffff";
          sunButton.style.color="#999999";
        }
    }
   

    //  더보기 버튼 클릭시

    document.addEventListener('DOMContentLoaded', function(){ //DOM 생성 후 이벤트 리스너 등록
      const moreBtn = document.querySelector('.more-button');
      const toAll = document.querySelector('.more-button2');
      //더보기 버튼 이벤트 리스너
      moreBtn.addEventListener('click', function(e){
          
        //showstep1
          let classList = document.querySelector('.filter').classList; // 더보기 프레임의 클래스 정보 얻기
          console.log(classList)
          // let filterHeight = document.querySelector('#filter').offsetHeight; //필터 높이 얻기
          // console.log(filterHeight)
          let contentHeight = document.querySelector('.filter > .content').offsetHeight; //컨텐츠 높이 얻기
          console.log(contentHeight)
          
          // 1단계이면 2단계로
          if(classList.contains('showstep1')){
              classList.remove('showstep1');
              if(contentHeight > '20vh'){
                  classList.add('showstep2');
                  console.log(classList + "success")
              }else{
                document.querySelector('.more-button').classList.add('hide');
              }
          }
          
         
          //전체보기시 더보기 버튼 감추기 & 감추기 버튼 표시
          if(!classList.contains('showstep1') && !classList.contains('showstep2')){
            e.target.classList.add('hide');
            document.querySelector('.more-button2').classList.remove('hide');
            
        }
         
        // 감추기 버튼 이벤트 리스너
        document.querySelector('.more-button2').addEventListener('click', function(e){
          e.target.classList.add('hide');
          document.querySelector('.more-button').classList.remove('hide'); // 더보기 버튼 감춤
          document.querySelector('.filter').classList.add('showstep1'); // 초기 감춤 상태로 복귀
      });
      });
  });







  // 게시글 띄우기
  
  const $searchPosts = document.querySelector('#posts');
  const $background = document.querySelector(".posts");
    const render= async()=>{
    const response =  await axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>{contentTemplate(res.data);
                
    })
    
      }
 
  render();
  
  const $status = document.querySelector(".status");
  const contentTemplate = (post)=>{
      console.log(post)
      const star = document.querySelector('.skilled-icon');
      
      for(let i = 0 ; i < post.length ; i++){
        const item = post[i]
        
        // if(item.status=="모집완료"){
        //   $status.style.backgroundColor="lightGray";
        // }else{
        //   $status.style.backgroundColor="blue";
        // }

        if(item.skilled==1 || item.skilled==2){
          star.innerHTML='<i class="fa fa-star" id="star1"></i>'
        }
        else if(item.skilled==3 || item.skilled==4){
          star.innerHTML='<i class="fa fa-star" id="star1"></i><i class="fa fa-star" id="star2"></i>'
        }
        if(item.skilled==5 || item.skilled==6){
          star.innerHTML='<i class="fa fa-star" id="star1"></i><i class="fa fa-star" id="star2"></i><i class="fa fa-star" id="star3"></i>'
        }
        else if(item.skilled==7 || item.skilled==8 ){
          star.innerHTML='<i class="fa fa-star" id="star1"></i><i class="fa fa-star" id="star2"></i><i class="fa fa-star" id="star3"></i><i class="fa fa-star" id="star4"></i>'
        }
        else if(item.skilled==9 || item.skilled==10){
          star.innerHTML='<i class="fa fa-star" id="star1"></i><i class="fa fa-star" id="star2"></i><i class="fa fa-star" id="star3"></i><i class="fa fa-star" id="star4"></i><i class="fa fa-star" id="star5"></i>'
        }
        const content = `
        <div class="posts" onclick="showPopup(${item.id})">
        <div class="top">
          <div class="sports">
              <div class="sports-img flex">
                   <img src="./image/아이콘/아이콘/운동명.png" alt="종목이미지"> 
              </div>
              <div class="sports-name">
                  ${item.sportsName}
              </div>
          </div>
          <div id="status">
              <div class="status">
                ${item.status}
              </div>
          </div>
      </div>
      <div class="member ">
          <div class="member-img flex">
              <img src="./image/아이콘/아이콘/인원.png" alt="">
          </div>
          <div class="member-name">
            ${item.headCount}
          </div>
      </div>
      <div class="place ">
          <div class="place-img flex">
              <img src="./image/아이콘/아이콘/위치.png" alt="">
          </div>
          <div class="place-name">
            ${item.siDo}
          </div>
      </div>
      <div class="skilled ">
          <div class="skilled-img flex">
              <img src="./image/아이콘/아이콘/숙련도.jpg" alt="">
          </div>
          <div class="skilled-name">숙련도:</div>
          <div class="skilled-icon ">
             
          </div>
      </div>
      <div class="baseline">
          <div class="target ">
              <div class="target-img flex">
                  <img src="./image/아이콘/아이콘/기간.png" alt="">
              </div>
              <div class="target-comment">${item.contents}</div>  
          </div>
          <div class="likes ">
              <div class="likes-img">
                  <i class="fa fa-heart"></i>
              </div>
              <div class="likes-count">
                  ${item.interest}
              </div>
          </div>
      </div>    
  </div>
        `;
      $searchPosts.insertAdjacentHTML('beforeend',content)
      }  
      
    }
         
    const applyBtn  =document.querySelector(".applyComplete");
  applyBtn.addEventListener("click",apply);
  
    function apply(){
      console.log("버튼을 눌렀습니다.")
      
      if(applyBtn.disabled==false) 
      {alert("success");
        location.reload();
      }
    }


    let today = new Date();
    console.log(today)

 //페이지네이션
 
 // const buttons = document.querySelector('.buttons');
  // const maxContent = 9;
  // const maxButton = 5;
  // let page = 1;


//   const render= async(page)=>{
//     const response =  await axios.get('https://jsonplaceholder.typicode.com/users')
//     .then(res=>{const numOfContent = res.data.length;
//           renderContent(numOfContent,res.data,page);
//           renderButton(numOfContent,page);
//           } 
//     )
    
//       }
 
//   render(page);
  
  
//   const contentTemplate = (data,id)=>{
    
//     const content = document.createElement("div");
//     content.classList.add("posts");
//     // console.log(data)
//     //   const content = `
//     //   <div class="posts">
//     //     <div>${item.name}</div>
//     //     <div>${item.address.street}</div>
//     //     <div></div>
//     //     <div></div>
//     //   </div>
      
//     //   `;
//     //   $searchPosts.insertAdjacentHTML('beforeend',content) 
//     // }
    
//       content.innerHTML=`
//     <div>${id}</div>
//     <div>
//       ${data.name}
//     </div>
      
//     </div>        
//     `;
    
//     return content;
//   }

// ;

// const makeButton = (id,numOfContent,page) => {
//   // console.log(page);//1
//   // console.log(id);//2
//   const button = document.createElement("button");
//   button.classList.add("button");
//   button.dataset.num = id;
//   button.innerText = id;
//   button.addEventListener("click", (e) => {
//     Array.prototype.forEach.call(buttons.children, (button) => {
//       if (button.dataset.num) button.classList.remove("active");
//     });
//     e.target.classList.add("active");
//     console.log(parseInt(e.target.dataset.num))
//     renderContent(numOfContent,page,parseInt(e.target.dataset.num));
//   });
//   return button;
// };



 
// // page: 1 or 2 , NOC : 10 , DATA : 배열
// const renderContent = (numOfContent,data,page) => {
  
//   // for(let i = 0 ; i < data.length ; i++){
//   //   const item = data[i];
//   //   console.log(item)
//   // 목록 리스트 초기화
//   while ($searchPosts.hasChildNodes()) {
//     $searchPosts.removeChild($searchPosts.lastChild);
//   }
//   // 글의 최대 개수를 넘지 않는 선에서, 화면에 최대 10개의 글 생성
//   for (let id = (page - 1) * maxContent + 1; id <= page * maxContent && id <= numOfContent; id++) {
//     $searchPosts.appendChild(contentTemplate(data,id));
//   }
// }
// ;


//                       // 10 , 1 
// const renderButton = (numOfContent,page) => {
//   const maxPage = Math.ceil(numOfContent / maxContent);
//   // console.log(maxPage)
//   while (buttons.hasChildNodes()) {
//     buttons.removeChild(buttons.lastChild);
//   }
//   for (let id = page; id < page + maxButton && id <= maxPage; id++) {
//     buttons.appendChild(makeButton(id,numOfContent,page));
//   }
//   buttons.children[0].classList.add("active");

//   buttons.prepend(prev);
//   buttons.append(next);

//   if (page - maxButton < 1) buttons.removeChild(prev);
//   if (page + maxButton > maxPage) buttons.removeChild(next);
// };


// // Prev, Next Button
// const goPrevPage = () => {
//   page -= maxButton;
//   render(page);
// };

// const goNextPage = () => {
//   page += maxButton;
//   render(page);
// };

// const prev = document.createElement("button");
// prev.classList.add("button", "prev");
// prev.innerHTML = '<ion-icon name="chevron-back-outline"></ion-icon>';
// prev.addEventListener("click", goPrevPage);

// const next = document.createElement("button");
// next.classList.add("button", "next");
// next.innerHTML = '<ion-icon name="chevron-forward-outline"></ion-icon>';
// next.addEventListener("click", goNextPage);




      
      




