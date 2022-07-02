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