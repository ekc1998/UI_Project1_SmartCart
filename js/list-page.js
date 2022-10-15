
const listBody = document.querySelector('table.shopping-list tbody');

let storedList = JSON.parse(localStorage.getItem('storedList')) || [];
storedList.forEach(item => {
    let tableRow = document.createElement('tr');
    tableRow.innerHTML =
        `
    <tr>
    <td>${item['name']}</td>
    <td>${item['price']}</td>
    <td></td>
    <td></td>
    </tr>
     `
    listBody.appendChild(tableRow)
})