const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const key = button.getAttribute('data-key');
    handleInput(key);
  });
});

document.addEventListener('keydown', (e) => {
  const key = e.key;
  handleInput(key);
});

function handleInput(key) {
  if (key === '=' || key === 'Enter') {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = 'Error';
    }
  } else if (key === 'clear') {
    currentInput = '';
  } else if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
  } else if (/[0-9.+\-*/]/.test(key)) {
    currentInput += key;
  }

  display.value = currentInput;
}
