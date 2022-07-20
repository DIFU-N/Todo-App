const newForm = document.querySelector(".new-form"),
newText = document.querySelector(".text"),
newTask = document.querySelector(".drop");

newForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const initial = newText.value;
    console.log(newText.value);

    const initial_el = document.createElement('div');
    initial_el.classList.add('drop'); //classlist.add property adds a class to the css classlist

    const initial_content_el = document.createElement('div');
    initial_content_el.classList.add('top');

    initial_el.appendChild(initial_content_el);

    const initial_input_el = document.createElement('input');
    initial_input_el.classList.add('task');
    initial_input_el.type = 'text';
    initial_input_el.value = initial;
    initial_input_el.setAttribute = ('readonly', 'readonly');

    initial_content_el.appendChild(initial_input_el);
    console.log('okay');

    const initial_actions_el = document.createElement('div');
    initial_actions_el.classList.add('buttons');

    const initial_edit_el = document.createElement('button');
	initial_edit_el.classList.add('update');
	initial_edit_el.innerText = 'Update';

    const initial_delete_el = document.createElement('button');
	initial_delete_el.classList.add('delete');
	initial_delete_el.innerText = 'Delete';

    initial_actions_el.appendChild(initial_edit_el);
    initial_actions_el.appendChild(initial_delete_el);

    initial_el.appendChild(initial_actions_el);
    console.log('oka');
    document.getElementsByClassName("drop")[0].style.display="block";
    newTask.appendChild(initial_el);

    // localStorage.setItem(initial_actions_el, );

    localStorage.setItem('.text', initial);
    localStorage.setItem(initial_el, $(newTask).value);

    newText.value = '';

    initial_edit_el.addEventListener('click', (e) => {
        if (initial_edit_el.innerText.toLowerCase() == "update") {
            initial_edit_el.innerText = "Save";
            initial_input_el.removeAttribute("readonly");
            initial_input_el.focus();
        } else {
            initial_edit_el.innerText = "Update";
            initial_input_el.setAttribute("readonly", "readonly");
        }
    });

    initial_delete_el.addEventListener('click', (e) => {
        newTask.removeChild(initial_el);
        console.log('poer');
    });
    console.log('okays')
});
localStorage.setItem($(newForm).value);