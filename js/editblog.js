//előző blogok kiiratása
//window.onload=renderProducts();
//READ
    var postHTML = '';
    var blogList = [];
    fetch('https://localhost:7053/api/Blog/Read?page=1')
    .then(function (response) {
        return response2.json();
    })
    .then(function (data) {
        appendData(data);
        console.log(response2.json());
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
    function appendData(data) {

    for (var i = 0; i < data.length; i++) {
        blogList.push({
            id: data[i].id,
            title: data[i].title,
            entry: data[i].entry
        });
        postHTML+=`
        <div class="card-container2">
        <div class="name-container"> 
            <h3 class="title2">${data[i].title}</h3> 
        </div> 
        <div class="entry2">
            <p>ID: ${data[i].id}</p>
        </div>
        <p class="author2">${data[i].authorNickname}</p> 
        <button class="btn3 edit-blog" data-blogid=${data[i].id} onclick="editPlease()">Szerkeszt</button>
        <br>
        <button class="btn3 delete-blog" data-blogid=${data[i].id}>Töröl</button>
        </div>

        `
    }

        document.getElementById('list-container').innerHTML = postHTML;
    }

//edit blog
function editPlease(){
    for (const item of document.querySelectorAll(".edit-blog")) {
    item.onclick=function(event){
        var id=event.target.dataset.blogid;
        console.log(blogList[1])
        renderEditBlog(id);
        }
    }
}   
    //törlés
    /* for (const item of document.querySelectorAll(".delete-blog")) {
        item.onclick=function(event){

            var id=event.target.dataset.productid;

            for (let i = 0; i < state.products.length; i++) {
                if(state.products[i].id==id){
                    data[i].isArchived == true;
                }
            }
            renderProducts();
        }  

    } */



function renderEditBlog(blogId){

            var blogIndex=0;
            for (let i = 0; i < blogList.length;i++){
                if (blogList[i].id==blogId){
                    blogIndex=i;
                }
            }

            var editFormHtml=`
            <div class="edit-container">
                <form id="edit" class="form">
                    <h1>Bejegyzés módosítása</h1>
                    <div class="form-field">
                    <label for="edittitle" id="newcucc">Title:</label>
                    <input type="text" name="edittitle" id="edittitle" value="${blogList[blogIndex].title}"autocomplete="off">
                    <small></small>
                    </div>
            
                    <div class="form-field">
                    <label for="newentry" id="newcucc">Entry:</label>
                    <input type="text" name="editentry" id="editentry" value="${blogList[blogIndex].entry}" autocomplete="off">
                    <small></small>
                    </div>
            
                    <div class="form-field">
                    <button type="submit" value="Edit blog" class="btn2">Módosítás</button>
                    </div>
                </form>
            </div>
            `;
            document.getElementById("edit-blog").innerHTML=editFormHtml;
        
           document.getElementById("edit").onsubmit=function(event){
                event.preventDefault();

                var data = { 
                    title: event.target.elements.edittitle.value,
                    entry: event.target.elements.editentry.value 
                };
                
                fetch('https://localhost:7053/api/Blog/Create', {
                    method: 'POST', // or 'PUT',
                    body: JSON.stringify(data),
                    })
                    .then(response => response.json())
                    .then(data => {
                    console.log('Success:', data);
                    })
                    .catch((error) => {
                    console.error('Error:', error);
                    });  
                
            }   
            

}
    




/* //bekérés adatoknak
document.getElementById('edit').onsubmit = function login(event){
    event.preventDefault();

    var title = event.target.elements.edittitle.value;
    var entry = event.target.elements.editentry.value;

    console.log(title)
    console.log(entry)
}
 */
