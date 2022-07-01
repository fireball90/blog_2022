
document.getElementById('login').onsubmit = function login(event){
    event.preventDefault();

    var name = event.target.elements.name.value;
    var pass = event.target.elements.pass.value;

    console.log(name)
    console.log(pass)
}