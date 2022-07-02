var isLoggedIn=false;


document.getElementById('login').onsubmit = function login(event){
    event.preventDefault();

    var name = event.target.elements.name.value;
    var pass = event.target.elements.pass.value;

    console.log(name)
    console.log(pass)

    if (name == "admin" && pass== "admin"){
        isLoggedIn=true;
    }else{
        isLoggedIn=false;
    }

    if (isLoggedIn===true){
        var belepes = document.getElementById('gombBe');
        belepes.classList.add("hidden");
        var register = document.getElementById('gombReg');
        register.classList.add("hidden");
    }
}

/* document.getElementById('gombKi').onclick = function logout(event){
    event.preventDefault();
    alert("Sikeres kilépés!");
    location.href = "index.html";
    isLoggedIn=false;
} */