document.addEventListener("DOMContentLoaded", function () {
    fetch('http://localhost:3001/all')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
     
}); 

//grab data from button
const addBtn = document.getElementById("add-btn");

//callbackfunction 
addBtn.onclick = function() {
    const nameData = document.getElementById('name');
    const name = nameData.value;
    nameData.value = "";
    //console.log(name) //this works

    fetch('http://localhost:3001/addData', {
    method:'POST',
    body:JSON.stringify({ name : name }),
    // mode: "cors",
    headers: {'Content-Type': 'application/json'}
}) //end fetch
    .then(response => response.json())
    .then(data => insertRow(data['data']))
    ; 
} //end addBtn.onClick

function insertRow (data) {
    //code to be added...
} //end insertRow

function renderHTMLTable(data) {

    const table = document.querySelector("table tbody");

    console.log(data);
    //commented out the line below
    //let tableHTML = " ";

    if (data.length === 0) {
        table.innerHTML="<tr><td class='no-data' colspan='5' >Table is empty</tr></td>"
    }

    data.forEach(function ({ID, name, dtae_added}) => {
        
    });// end forEach
} //end loadHTMLTable