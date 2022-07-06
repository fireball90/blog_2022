
document.getElementById('signup').onsubmit = function signUp(event){
    event.preventDefault();

    var username = event.target.elements.username.value;
    var password = event.target.elements.password.value;

    var data = {
        username : username,
        password : password,
    }

    fetch('https://localhost:7053/api/Auth/Registration', {
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
    
}



