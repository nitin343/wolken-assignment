

save_value.onclick = function () {

    var name = document.getElementById('username14');
    let pass = document.querySelector('.password14');
    let email = document.getElementById('inputEmail4');
    let save_value = document.getElementById('save_value');

    if (name.value == "" && pass.value == "" && email.value == "") {
        alert('all the details must be filled')
    } else {
        localStorage.setItem("username", name.value);
        localStorage.setItem("passwords", pass.value);
        localStorage.setItem("email", email.value);
        alert('Registered sucessfully')
    }
}