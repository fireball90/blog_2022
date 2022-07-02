document.getElementById('new').onsubmit = function login(event){
    event.preventDefault();

    var titleNew = event.target.elements.newtitle.value;
    var entryNew = event.target.elements.newentry.value;

    console.log(titleNew)
    console.log(entryNew)

    const data = { 
        title: titleNew,
        entry: entryNew,
        authorId: 1
    };
 
    fetch('https://localhost:7053/api/Blog/Create', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
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


