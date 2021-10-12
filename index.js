function handleOnClick(event) {
  const inputData = document.querySelector('input');
  const currentInputValue = inputData.value;
  inputData.value = currentInputValue + event.target.innerText;
}

document.querySelector('main').addEventListener('click', handleOnClick)
