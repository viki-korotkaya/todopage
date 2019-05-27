 
const addButton = document.getElementById('add');
addButton.addEventListener('click', () => {
	let form = document.forms[0];
	let newTask = form.elements.task.value.trim();
	if (!newTask){ return }
    
    let li = document.createElement("li");
    document.getElementById("list_ul").appendChild(li);

    let label = document.createElement("label");
    label.appendChild(document.createTextNode(newTask));
    li.appendChild(label);

    let input = document.createElement('input');
    input.setAttribute("type", "checkbox");
    label.appendChild(input);

    let span = document.createElement("span");
    span.className = "checkmark";
    label.appendChild(span);

    form.elements.task.value = '';

});


let list = document.querySelector('ul');
list.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'SPAN') {
    ev.target.parentNode.classList.toggle('checked');
  }
}, false);





