
document.getElementById('login').onsubmit = function login(event){
    event.preventDefault();

    var name = event.target.elements.name.value;
    var pass = event.target.elements.pass.value;

    const data = { 
        username: name,
        password: pass,
    };
 
    fetch('https://localhost:7053/api/Auth/Login', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    Cookies.set("JWT", data);
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });  

    var coded = Cookies.get("JWT");  
    var loginObject = renderLoginedUser(coded); 
    
    //console.log(loginObject)


    if (loginObject.role == "Admin"){
        var belepes = document.getElementById('gombBe');
        belepes.classList.add("hidden");
        var register = document.getElementById('gombReg');
        register.classList.add("hidden");

        var kilepes = document.getElementById('gombKi');
        kilepes.classList.remove("hidden");
        var newblog = document.getElementById('gombNew');
        newblog.classList.remove("hidden");
        var editblog = document.getElementById('gombEdit');
        editblog.classList.remove("hidden");
    }

    if (loginObject.role=="User"){
        var belepes = document.getElementById('gombBe');
        belepes.classList.add("hidden");
        var register = document.getElementById('gombReg');
        register.classList.add("hidden");
        var newblog = document.getElementById('gombNew');
        newblog.classList.add("hidden");
        var editblog = document.getElementById('gombEdit');
        editblog.classList.add("hidden");

        var kilepes = document.getElementById('gombKi');
        kilepes.classList.remove("hidden");
    }
}


//logout
document.getElementById('gombKi').onclick = function logout(event){
    event.preventDefault();
    alert("Sikeres kilépés!");
    location.href = "index.html";
    Cookies.set("JWT", "");
} 


function renderLoginedUser(token) {       

    let codedUserData = token.split('.')[1]     
    let uncodedData = atob(codedUserData)    
    let object = JSON.parse(uncodedData)     

    return object 
}
