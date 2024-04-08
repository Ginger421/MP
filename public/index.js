document.addEventListener("DOMContentLoaded", function () {
    fetch('http://localhost:3001/all')
    .then(response => response.json())
    .then(data => renderHTMLTable(data['data']));
     
}); 

const addBtn = document.getElementById("add-btn");

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

    console.log(data); //added to see if/what grabbing???????

    insertRow(data) 
    renderHTMLTable(data) //trying to see if this updates table after createing new
    
} //end addBtn.onClick

const deleteBtn = document.getElementsByClassName("delete-row");

deleteBtn.onclick = function () {
    fetch("http://localhost:3001/deleteData" , {
        method: "DELETE",
        body
    })
}

function insertRow (data) {
    console.log(data);
    //stopped 57 mins
    //check to see if ...dsjk?????
    const hasData = table.querySelector(".no-data");
    let tableHTML = "<tr>";

    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            if (key === dateAdded) {
                data [key] = new Date (data[key]).toLocaleString()
            }

            tableHTML += `<td>${data[key]}</td>`
        }
        
    }

        tableHTML += `<td><button class="delete-row" data-id=${data.ID}>Delete</button></td>`;
        tableHTML += `<td><button class="edit" data-id=${data.ID}>Edit</button></td>`

    tableHTML += "</tr>";

    if (hasData) {
        table.innerHTML = tableHTML;
    } else {
        const newRow = table.insertRow();
        newRow.innerHTML = tableHTML;
    } //end if else

} //end insertRow

//function to dynamically create table
function renderHTMLTable(data) {
    const table = document.querySelector("table tbody");

    console.log(data); //is returning array

    if (data.length === 0) {
        table.innerHTML="<tr><td class='no-data' colspan='5' >Table is empty</tr></td>"
        return; 
    }

    let tableHTML = " ";
    console.log(tableHTML); //see if grabbing is returning nothing

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
    console.log(tableHTML); //added this to see if grabbing tableHTML????? is returning HTML
} //end loadHTMLT

//video 52 mins he's still refreshing page not auto updatein when hit submit