const $searchPosts = document.querySelector('#posts');


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
const $extraFliter = document.querySelector('.more-button');
const $filerHeight = document.querySelector('#filter').offsetHeight;

// 더보기 눌렀을 시 요소 크기 증가 시키기 (여기 구현해야함)
function filterClick(){
    console.log($filerHeight)
    if($filerHeight==69){
        $filerHeight==130
    }
}


// axios 연결
function getSearchParams(){
    const response = axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=> actions(res.data))
    
    
}

getSearchParams();


function actions(data){
    for(let i = 0 ; i < data.length ; i++){
        const result  = data[i];
    
    const item = `
    
    <div>${result.name}</div>
    
    `;
    $searchPosts.insertAdjacentHTML('beforeend',item);
    }
}


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

    // 날짜 월요일 버튼 클릭 시 배경 파란색
    const date = document.querySelector('.date-button');
    date.addEventListener('click',function(e){
        console.log(e.target.value);
        e.target.style.backgroundColor="blue";
    })