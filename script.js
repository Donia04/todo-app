const list = document.getElementById('list');
const newListItem = document.getElementById('newItem');
const addButton = document.getElementById('add');

const checkAll = document.getElementById('checkAll');
const deleteAll = document.getElementById('deleteAll');

function addPlaceholder() {
    const placeholder = document.createElement('div');
    placeholder.className = 'listItem';
    placeholder.id = 'placeholder'

    const placeholderText = document.createElement('p');
    placeholderText.innerText = 'Add List Items';
    placeholder.appendChild(placeholderText);

    list.appendChild(placeholder);
}

function removePlaceholder() {
    const placeholder = document.getElementById('placeholder');
    if (placeholder !== null) {
        list.removeChild(placeholder);
    }
}

function placeholder() {
    if (list.children.length === 0) {
        addPlaceholder();
    } else {
        removePlaceholder();
    }
}

function checkItem(event) {
    let target = event.target.parentNode;
    target.classList.toggle('checked');
}

function deleteItem(event) {
    let target = event.target.parentNode;
    list.removeChild(target);
    placeholder();
}

function checkAllItems() {
    if (document.getElementById('placeholder')) {
        return
    }

    const items = list.children;
    for (let item of items) {
        item.classList.add('checked');
    }
}

function deleteAllItems() {
    if (document.getElementById('placeholder')) {
        return
    }

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    placeholder();
}

function addListItem() {
    if (!newListItem.value.trim()) {
        newListItem.value = '';
        return
    }

    const newValue = document.createElement('p');
    newValue.innerText = newListItem.value;
    newListItem.value = '';

    const newItem = document.createElement('div');
    newItem.className = 'listItem';

    const checkButton = document.createElement('div');
    checkButton.className = 'checkButton';
    checkButton.onclick = checkItem;

    const deleteButton = document.createElement('div');
    deleteButton.className = 'deleteButton';
    deleteButton.onclick = deleteItem;

    newItem.appendChild(checkButton);
    newItem.appendChild(newValue);
    newItem.appendChild(deleteButton);

    list.appendChild(newItem);

    placeholder();
}

// Sort out this
addButton.addEventListener('click', addListItem);
document.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        addListItem();
    }
});
checkAll.addEventListener('click', checkAllItems);
deleteAll.addEventListener('click', deleteAllItems);
placeholder();

//--------------- Storage ---------------

//const toDos = window.indexedDB.open()