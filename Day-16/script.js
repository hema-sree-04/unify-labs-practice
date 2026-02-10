// Day 16 Logic Practice
console.log('Lab Session 16 Started');

const display = document.getElementById('display');
const button = document.getElementById('logicBtn');

// Initial message
display.innerText = 'Logic Engine Online';

// Add button click logic
button.addEventListener('click', () => {
  display.innerText = 'Button clicked! Running logic...';
  console.log('Logic Engine executed!');
});
