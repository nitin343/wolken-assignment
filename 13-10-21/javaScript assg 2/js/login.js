// var hide = document.querySelectorAll('#open');

// // hide.style.color = 'red';


// function hidding(element){
//    element.style.color = "yellow";
// }

// var adding = document.querySelector('.visibility');

// adding.innerHTML = "done";

// var tt = true;

// log.innerHTML = 'welcome';



// function toggle(){
//     tt = false;
// }

// function test(){
//     return tt = false;
// }

// console.log(tt);




var log = document.getElementById('visibility');
var show = document.getElementById('show');
var hide = document.getElementById('hide');
var password = document.getElementById('InputPassword1');
let inputtext = document.getElementById('inputtext');
let InputPassword1 = document.getElementById('InputPassword1');

let username = localStorage.getItem('username')
let storedPassword = localStorage.getItem('passwords')


function toggle(id){
    if(id === 'show'){
        show.style.display = 'block';
        hide.style.display = 'none';
        password.setAttribute('type','text');
    }else if(id === 'hide'){
        hide.style.display = 'block'
        show.style.display = 'none'
        password.setAttribute('type','password');

    }else{
        alert('good bye')
    }
}


function check(){
    if(username === inputtext.value && storedPassword === InputPassword1.value){
        alert('login Successfull')
    }else{
        alert("username or password are incorrect")
    }
}