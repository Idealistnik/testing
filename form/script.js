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

// document.querySelector('form').addEventListener('submit', (e) => {
// e.preventDefault();
// alert('Форма отправлена!');
// });


const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    console.log([...data.entries()]);
    console.log(Object.fromEntries(data));
})




