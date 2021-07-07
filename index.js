/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let x = parseInt(time.split(':')[0]);
  if (x < 12) {
    return 'Good Morning';
  } else if (x > 17) {
    return 'Good Evening';
  } else {
    return 'Good Afternoon';
  }
};

let greeting = greet(time);

function displayMessage(greeting) {
  let x = document.getElementById('greeting');
  x.innerHTML = greeting; 
};