// date
const date = document.getElementById('date');
const options = { weekday: 'long', month: 'short', day: 'numeric' };
const today = new Date();
date.innerHTML = today.toLocaleDateString('en-US', options);

// add todo
const inputBox = document.getElementById('input-box');
const addTask = () => {
    if (!inputBox.value) {
        alert('You must write something');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
};

// list todo

const listContainer = document.getElementById('list-container');
listContainer.addEventListener(
    'click',
    (e) => {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked');
            saveData();
        } else if (e.target.tagName === 'SPAN') {
            e.target.parentElement.remove();
            saveData();
        }
    },
    false
);

// localstorage
const saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML);
};

const showData = () => {
    listContainer.innerHTML = localStorage.getItem('data');
};
showData();
