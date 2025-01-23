//your JS code here. If required.
document.getElementById('btn').addEventListener('click', () => {
  // Get the input value
  const inputValue = Number(document.getElementById('ip').value);
  const outputDiv = document.getElementById('output');

  // Clear the output div before starting
  outputDiv.textContent = '';

  // Create the initial promise
  const initialPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isNaN(inputValue)) {
        reject('Invalid input. Please enter a number.');
      } else {
        resolve(inputValue);
      }
    }, 2000);
  });

  initialPromise
    .then((number) => {
      outputDiv.textContent = `Result: ${number}`;
      return new Promise((resolve) => {
        setTimeout(() => resolve(number * 2), 1000);
      });
    })
    .then((number) => {
      outputDiv.textContent = `Result: ${number}`;
      return new Promise((resolve) => {
        setTimeout(() => resolve(number - 3), 1000);
      });
    })
    .then((number) => {
      outputDiv.textContent = `Result: ${number}`;
      return new Promise((resolve) => {
        setTimeout(() => resolve(number / 2), 1000);
      });
    })
    .then((number) => {
      outputDiv.textContent = `Result: ${number}`;
      return new Promise((resolve) => {
        setTimeout(() => resolve(number + 10), 1000);
      });
    })
    .then((finalResult) => {
      outputDiv.textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      outputDiv.textContent = `Error: ${error}`;
    });
});
