let inputField = document.querySelector("#input-field");
let addButton = document.querySelector("#add-button");

let list = document.querySelector("#list");


let myArr

window.addEventListener('load', (evt) => {
    if(JSON.parse(localStorage.getItem('array')) == null) {
        myArr = [];
    } else {
        myArr = JSON.parse(localStorage.getItem('array'))
        let localArr = JSON.parse(localStorage.getItem('array'));
        localArr.forEach(obj => {
        //use obj.text to get each text value to use
        let note = `<li class="note">${obj.text}</li>`;
        list.innerHTML += note;
    });
    }
    
})

// myArr.addEventListener('load', loadFunction);

// function loadFunction() {
//     if(JSON.parse(localStorage.getItem('array')) == null) {
//         myArr = [];
//     } else {
//         myArr = JSON.parse(localStorage.getItem('array'))
//     }
// }

addButton.addEventListener('click', function (evt) {
    if(inputField.value == "") {
        return false 
    } else {
        let obj = {
            text: inputField.value,
        }
        myArr.push(obj);
        localStorage.setItem('array', JSON.stringify(myArr));
        let note = `<li class="note">${inputField.value}</li>`;
        list.innerHTML += note;
        inputField.value = "";
    }
})

