//Exercise 1 : Select A Kind Of Music
//Ex1.1

let select = document.getElementById('genres') 

select.setAttribute('onchange','myNewFunction(this)')

function myNewFunction(sel) {
    alert(`${sel.options[sel.selectedIndex].text} the value is ${sel.options[sel.selectedIndex].value}`)
}

//Ex1.2

let option = document.createElement('option')
let newValue = document.createTextNode('Classic')
option.appendChild(newValue)
let optionThree = document.body.children[0]
optionThree.appendChild(option)
option.value = 'classic'

//Ex1.3

option.setAttribute('selected','')

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Exercise 2: Delete Colors

let click = document.querySelector('input')

click.addEventListener('click', removecolor) 

function removecolor() {
    let color = document.getElementById("colorSelect");
    color.remove(color.selectedIndex);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
