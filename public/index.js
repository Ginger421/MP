document.addEventListener("DOMContentLoaded", function () {
    //removed getAll from fetch to see if helps
    fetch('http://localhost:3001/getAll')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
     
})

//grab data from button
const addBtn = document.getElementById("#add-btn");

//callbackfunction 
addBtn.onclick = function() {
    const nameData = document.getElementById('#name');
    const name = nameData.value;
    nameData = "";

    fetch('http://localhost:3001/insert')
}
function loadHTMLTable(data) {

    const table = document.querySelector("table tbody");

    console.log(data);
    //commented out the line below
    //let tableHTML = " ";

    if (data.length === 0) {
        table.innerHTML="<tr><td class='no-data' colspan='5' >Table is empty</tr></td>"
    }
}