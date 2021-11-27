'use strice';
console.log('hello');

const fruitsArr = [
  'apple',
  'orange',
  'grape',
  'mango',
  'apple',
  'apple',
  'orange',
  'grape',
  'grape',
];

const section = document.querySelector('section');

function showFruits(arr) {
  for (i = 0; i < arr.length; i++) {
    const myButton = document.createElement('button');
    myButton.textContent = arr[i];
    myButton.classList.add(`${arr[i]}`);
    myButton.id = [i];
    section.appendChild(myButton);
  }
}

showFruits(fruitsArr);

let selectedClass;

for (i = 0; i < fruitsArr.length; i++) {
  const button = document.getElementById(i);
  button.addEventListener('click', () => {
    console.log('clicked');
    selectedClass = button.classList.value;
    console.log(selectedClass);

    const buttonsArray = document.querySelectorAll('button');
    buttonsArray.forEach(button => {
      if (button.classList.value !== selectedClass) {
        button.classList.add('invisible');
      }
    });
  });
}
