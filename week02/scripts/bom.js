const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deletebutton = document.createElement('button');

        li.textContent = input.value;
        deletebutton.textContent = "❌";

        deletebutton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        li.append(deletebutton);
        list.append(li);

        input.value = '';
        input.focus();
    }
});