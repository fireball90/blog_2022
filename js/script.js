
//menü responzivitás
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

//header változás
window.onload = function () {
    var header = document.getElementById('header');
    var pictures = new Array('img/header1.jpg','img/header2.jpg','img/header3.jpg','img/header4.jpg');
    var numPics = pictures.length;
    if (document.images) {
        var chosenPic = Math.floor((Math.random() * numPics));
        header.style.background = 'url(' + pictures[chosenPic] + ')';
    }
} 


/* //cookie beálíltások
var cookieName= "CodingStatus";
var cookieValue="Coding Tutorials";
var cookieExpireDays= 30;

//elfogadott cookie
let acceptCookie= document.getElementById("acceptCookie");
    acceptCookie.onclick= function(){
    createCookie(cookieName, cookieValue, cookieExpireDays);
}

//böngésző cookie mentés
let createCookie= function(cookieName, cookieValue, cookieExpireDays){
    let currentDate = new Date();
    currentDate.setTime(currentDate.getTime() + (cookieExpireDays*24*60*60*1000));
    let expires = "expires=" + currentDate.toGMTString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    if(document.cookie){
        document.getElementById("cookiePopup").style.display = "none";
    }else{
        alert("Unable to set cookie. Please allow all cookies site from cookie setting of your browser!");
    }
}

//cookie kiszedése böngészőből
let getCookie= function(cookieName){
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//cookie van vagy nincs
let checkCookie= function(){
    let check=getCookie(cookieName);
    if(check==""){
        document.getElementById("cookiePopup").style.display = "block";
    }else{
        
        document.getElementById("cookiePopup").style.display = "none";
    }
}
//meghívás
checkCookie();
 */



/* fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(json => {
    //console.log(json.data);
    const markup = json.data.map(el => {
        return `
        <div class="card-container">
            <div class="image-container">
              <img class="round" src="${el.avatar}">
    
            </div>
             <div class="name-container"> 
                 <span class="firstName">${el.first_name}</span>
                 <span class="lastName">${el.last_name}</span>
                
             </div> 
             <p class="email">${el.email}</p>  
        </div>
        `
    });
    console.log(markup);
    document.querySelector('.list-container').innerHTML = markup.join('');
  
})
.catch((error) => {
    console.error('Error:', error);
});

fetch('https://localhost:7053/api/Blog/Read?page=1')
  .then(response => response.json())
  .then(data => console.log(data))
  */

var postHTML = '';
var authorPls='Nincs név';
fetch('https://localhost:7053/api/Blog/Read?page=1')
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
      appendData(data);
      console.log(response.json());
  })
  .catch(function (err) {
      console.log('error: ' + err);
  });
function appendData(data) {

  for (var i = 0; i < data.length; i++) {
    postHTML+=`
    <div class="card-container">
     <div class="name-container"> 
         <h3 class="title">${data[i].title}</h3> 
         <hr>
     </div> 
     <div class="entry">
        <p>${data[i].entry}</p>
     </div>
    <hr>
     <p class="author">${data[i].authorNickname}</p>  
    </div>
    `

/*       var div = document.createElement("div");
      div.innerHTML = 'Name: ' + data[i].title + ' ' + data[i].entry;
      mainContainer.appendChild(div); */
  }
  document.getElementById('list-container2').innerHTML = postHTML;
}

//logout
document.getElementById('gombKi').onclick = function logout(event){
    event.preventDefault();
    alert("Sikeres kilépés!");
    location.href = "index.html";
}
const isLoggedIn = false;
//login check
function loginCheck(event){
    event.preventDefault();
    if (isLoggedIn){
        var elementKi = document.getElementById("gombKi");
            elementKi.classList.add("hidden");
    }else{
        var elementKi = document.getElementById("gombKi");
            elementKi.classList.remove("hidden");
    }
}

//belépés
document.getElementById('login').onsubmit = function login(event){
    event.preventDefault();

    var name = event.target.elements.name.value;
    var pass = event.target.elements.pass.value;

    console.log(name)
    console.log(pass)

    isLoggedIn = true;
}
 

//regisztráció
document.getElementById('signup').onsubmit = function signUp(event){
    event.preventDefault();

    var username = event.target.elements.username.value;
    var password = event.target.elements.password.value;
    var nickname = event.target.elements.email.value;

    console.log(username)
}


//new blog



//edit blog





