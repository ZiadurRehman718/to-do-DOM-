const input = document.querySelector('#text');
const ul = document.querySelector('#list');

function createElement(userElement , UserText) {
    const element = document.createElement(userElement);
    const textNode = document.createTextNode(UserText);
    element.appendChild(textNode);
    return element
}

function AddToDo(e) {
    e.preventDefault()
    const li = createElement('LI' , input.value);
    const editbtn = createElement('BUTTON' , 'edit');
    editbtn.setAttribute('onclick' , 'EditToDo(this)')
    const deletebtn = createElement('BUTTON' , 'delete');
    deletebtn.setAttribute('onclick' , 'DeleteToDo(this)')
    li.appendChild(editbtn);
    li.appendChild(deletebtn);

    ul.appendChild(li);
    input.value = ''
}


function EditToDo(element) {
    const newTask = prompt('Enter new task');
    element.parentNode.childNodes[0].nodeValue = newTask
}

function DeleteToDo(element) {
    ul.removeChild(element.parentNode)
}