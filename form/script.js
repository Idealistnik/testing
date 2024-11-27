const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

const currentDate = `${year}-${month}-${day}`;

// const currentDate = new Date().toISOString().split('T')[0];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('date').setAttribute('max', currentDate);
});

// document.getElementById('date').setAttribute('max', currentDate);

document.querySelector('form').addEventListener('submit', (e) => {
e.preventDefault();
alert('Форма отправлена!');
});



