// let login = document.querySelector('.login');

// let login = document.getElementsById('login1');
// let loginList = document.querySelector('.login-list');
// let visibiltiy = 0;


// function divDisplay(ele) {
//     if (ele === "login") {
//         this.visibiltiy = 1;
//         console.log(this.visibiltiy);
//         showList(this.visibiltiy)
//     } else {
//         console.log('not working');
//     }
// }

// function showList(visibiltiy) {

//     if (visibiltiy === 1) {
//         document.querySelector('.login-list').className = "login-list007"

//     }
// }

// function hidden(val) {
//     if( val === 0){
//     return    document.querySelector('.login-list').className = "login-list"
//     }else{
//         console.log("hide not working");
//     }
// }

// console.log(visibiltiy);


// let showList = document.querySelector('#loginList');

// const hideList = document.querySelector('#id');

// function show(ele) {
//     if(ele === '1'){
//         document.querySelector('.login-list').className = 'loginList02'
//     }else {
//        console.log("not working");
//     }
// }

// const element = document.querySelector(".class__name");

// hideList.addEventListener("click", () => {
//     console.log('heloo');
// });

// let loginButton = document.getElementById('loginList');
// let list = document.querySelector('.login-list');

// loginButton.addEventListener=('click', function run(){
//     list.setAttribute('style', 'display:block')
// })




// function show(ele) {
// let loginButton = document.querySelector('#login-button');
// let list = document.getElementsByClassName('login-list');

// if(list.style.display != 'none'){
//    list.style.display ='none';
// }else{
//     list.style.display = 'block';
// }
// }

// let over = document.getElementById('loginList');
// let list = document.getElementById('list02');
// over.addEventListener('mouseover', function run(){
    
//     if(list.style.display === 'none'){
//         list.style.display = 'block'
//     }else{
//         list.style.display = 'none';
//     }

// })

function show(ele){
    let id = document.getElementById('loginList');
    let list = document.getElementById('list02');
    let visible = 0


    if(ele == 1){
        list.style.display = 'block'
        
    }else{
        list.style.display = 'none';
    }


}

function hide(ele){
    let id = document.getElementById('loginList');
    let list = document.getElementById('list02');


    if(ele == 0){
        list.style.display = 'none'
    }else{
        list.style.display = 'block'
    }

}