'use strict';

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const dropdownBtn = document.querySelector('.dropdown--btn');
const myDropdown = document.getElementById('myDropdown');
const input = document.getElementById('myInput');

const showDropdown = () => {
  myDropdown.classList.toggle('show');
};

// Filter Function
const filter = () => {
    const filter = input.value.toUpperCase();
    const a = myDropdown.getElementsByTagName('a');
    
    for (let i = 0; i < a.length; i++) {
        if (a[i].textContent.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = '';
        } else {
            a[i].style.display = 'none';
        }
    }
};

// Call fucntions
dropdownBtn.addEventListener('click', showDropdown);
input.addEventListener('keyup', filter);