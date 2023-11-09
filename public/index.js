const table = document.querySelector("table tbody");

let tableHTML = " ";

const addBtn = document.getElementById("add-btn");

document.addEventListener("DOMContentLoaded", function () {
    fetch('http://localhost:3001/all')
    .then(response => response.json())
    .then(data => renderHTMLTable(data['data']));
     
}); 

//callbackfunction to grab data and add data to database
addBtn.onclick = function() {
    const nameData = document.getElementById('name');
    const name = nameData.value;
    nameData.value = "";

    fetch('http://localhost:3001/addData', {
    method:'POST',
    body:JSON.stringify({ name : name }),
    headers: {'Content-Type': 'application/json'}
}) //end fetch
    .then(response => response.json())
    .then(data => insertRow(data['data']));
    
    //insertRow() //am working ahead nnklnklmklmk
} //end addBtn.onClick

function renderHTMLTable(data) {

    console.log(data);

    if (data.length === 0) {
        table.innerHTML="<tr><td class='no-data' colspan='5' >Table is empty</tr></td>"
        return; 
    }

    data.forEach(function ({ID, name, date_added}) {
        tableHTML += "<tr>";
        tableHTML += `<td>${ID}</td>`;
        tableHTML += `<td>${name}</td>`;
        tableHTML += `<td>${new Date(date_added).toLocaleString()}</td>`;
        tableHTML += `<td><button class="delete-row" data-id=${ID}>Delete</button></td>`;
        tableHTML += `<td><button class="edit" data-id=${ID}>Edit</button></td>`
        tableHTML += "</tr>"
    });// end forEach

    table.innerHTML = tableHTML;
} //end loadHTMLTable

function insertRow (data) {
    console.log(data);
    //stopped 57 mins
    //check to see if ...dsjk?????
    const hasData = table.querySelector("no-data");
    let tableHTML = "<tr>";

    data.forEach(function({ID, name, dateAdded}) {
        tableHTML += `<td>${ID}</td>`;
        tableHTML += `<td>${name}</td>`;
        tableHTML += `<td>${new Date(dateAdded).toLocaleString()}</td>`;
        tableHTML += `<td><button class="delete-row" data-id=${ID}>Delete</button></td>`;
        tableHTML += `<td><button class="edit" data-id=${ID}>Edit</button></td>`
    }) //end foreach

    tableHTML += "</tr>";

    if (hasData) {
        table.innerHTML = tableHTML;
    } else {
        const newRow = table.insertRow();
        newRow.innerHTML = tableHTML;
    } //end if else

} //end insertRow

const deleteBtn = document.getElementsByClassName("delete-row");

deleteBtn.onclick = function () {
    fetch("http://localhost:3001/deleteData" , {
        method: "DELETE",
        body
    })
}