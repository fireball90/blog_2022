
document.getElementById('signup').onsubmit = function signUp(event){
    event.preventDefault();

    var username = event.target.elements.username.value;
    var password = event.target.elements.password.value;
    var nickname = event.target.elements.email.value;

    console.log(username)
}
