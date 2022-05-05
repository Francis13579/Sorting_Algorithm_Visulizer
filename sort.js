function swap(el1, el2) {
  let temp = el1.style.height; //third variable for swapping
  el1.style.height = el2.style.height;
  el2.style.height = temp;
}

// Disable sorting algorithms buttons when they don't need
function disableSorting() {
  document.querySelector(".bubbleSort").disabled = true;
  document.querySelector(".selectionSort").disabled = true;
  document.querySelector(".insertionSort").disabled = true;
  document.querySelector(".mergeSort").disabled = true;
  document.querySelector(".quickSort").disabled = true;
}

// Enable sorting algorithms buttons when they need
function enableSorting() {
  document.querySelector(".bubbleSort").disabled = false;
  document.querySelector(".selectionSort").disabled = false;
  document.querySelector(".insertionSort").disabled = false;
  document.querySelector(".mergeSort").disabled = false;
  document.querySelector(".quickSort").disabled = false;
}

// Disable size slider when sorting is running
function disableSizeSlider() {
  document.querySelector("#size_input").disabled = true;
}

// Disable speed slider when sorting is running
function disableSpeedSlider() {
  document.querySelector("#speed_input").disabled = true;
}

// Enable size slider when sorting is running
function enableSizeSlider() {
  document.querySelector("#size_input").disabled = false;
}

// Enable speed slider when sorting is running
function enableSpeedSlider() {
  document.querySelector("#size_input").disabled = false;
}

// Disable New Array button when sorting is running
function disableNewArrayBtn() {
  document.querySelector(".new").disabled = true;
}

// Enable New Array button when sorting is running
function enableNewArrayBtn() {
  document.querySelector(".new").disabled = false;
}

// Disable New Array button when sorting is running
function disableStopSortingBtn() {
  document.querySelector(".stop").disabled = true;
}

// Disable New Array button when sorting is running
function enableStopSortingBtn() {
  document.querySelector(".stop").disabled = false;
}

function delayTime(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

let arraySize = document.querySelector("#size_input");

arraySize.addEventListener("input", function () {
  console.log(arraySize.value, typeof arraySize.value);
  createNewArray(parseInt(arraySize.value));
});

let delay = 260;

let delayElement = document.querySelector("#speed_input");

delayElement.addEventListener("input", function () {
  console.log(delayElement.value, typeof delayElement.value);
  delay = 320 - parseInt(delayElement.value);
});

let barArray = [];

createNewArray();

function createNewArray(noOfBars = 60) {
  deleteChild();

  barArray = [];
  for (let i = 0; i < noOfBars; i++) {
    barArray.push(Math.floor(Math.random() * 251));
  }
  console.log(barArray);

  const bars = document.querySelector("#sorting");

  for (let i = 0; i < noOfBars; i++) {
    const bar = document.createElement("div");
    bar.style.height = `${barArray[i] * 2}px`;
    bar.classList.add("bar");
    bar.classList.add("flex-item");
    bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
  }
}

function deleteChild() {
  const bar = document.querySelector("#sorting");
  bar.innerHTML = "";
}

const newArrayButton = document.querySelector(".new");
newArrayButton.addEventListener("click", function () {
  hasPressedStop = false;
  enableSpeedSlider();
  console.log("From newArray " + arraySize.value);
  console.log("From newArray " + delay);
  enableSorting();
  enableSizeSlider();
  createNewArray(arraySize.value);
});

const stopSortingButton = document.querySelector(".stop");
stopSortingButton.addEventListener("click", function () {
  disableSorting();
  disableSizeSlider();
  hasPressedStop = true;
});
