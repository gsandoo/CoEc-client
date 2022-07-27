const $searchPosts = document.querySelector('#search-posts');




// axios 연결
function hello(){
    const response = axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=> actions(res.data));
}

hello();


function actions(data){
    for(let i = 0 ; i < data.length ; i++){
        const result  = data[i];
    
    const item = `
    
    <div>${result.name}</div>
    
    `;
    $searchPosts.insertAdjacentHTML('beforeend',item);
    }
}
