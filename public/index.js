document.addEventListener("DOMContentLoaded", function () {
    //console.log('fetch')
    fetch('http://localhost:3001/getAll')
    .then(response => response.json())
    .then(data => loadHTMLTable(data['data']));
    
})


function loadHTMLTable(data) {

    const table = document.querySelector("table tbody");

    console.log(data);
    let tableHTML = " ";

    if (data.length === 0) {
        table.innerHTML="<tr><td class='no-data' colspan='5' >Table is empty</tr></td>"
    }
}