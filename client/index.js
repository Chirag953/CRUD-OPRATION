
document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:5000/getAll')
        .then(response => response.json())
        .then(data => loadHTMLTable(data.data))  
        .catch(error => console.error('Fetch error:', error));
});
 
const addBtn= document.querySelector('#add-name-btn');


addBtn.onclick=function(){
    const nameInput = document.querySelector('#name-input');
    const name = nameInput.value;
    nameInput.value="";

    fetch('http://localhost:5000/insert',{
        headers:{
            'content-type':'application/json'
        },
        method : 'POST',
        body: JSON.stringify({name : name})
    })
        .then(response=>response.json())
        .then(data =>insetRowIntoTable(data.data))
    ;

    }

    function insetRowIntoTable(data){

    }







function loadHTMLTable(data){
    const table=document.querySelector('table tbody');
    // let tableHtml="";
    console.log(data);

    if (!data || data.length === 0) {
        table.innerHTML = "<tr><td class='no-data' colspan='5'>NO data</td></tr>";
        return;
    }
}