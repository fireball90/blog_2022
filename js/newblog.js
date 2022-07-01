document.getElementById('new').onsubmit = function login(event){
    event.preventDefault();

    var title = event.target.elements.newtitle.value;
    var entry = event.target.elements.newentry.value;

    console.log(title)
    console.log(entry)
}