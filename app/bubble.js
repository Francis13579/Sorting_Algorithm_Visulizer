// // 1. Bubble sort

let hasPressedStop = new Boolean(false);

async function bubble() {
  const elements = document.querySelectorAll(".bar");
  // let noSwaps;
  for (let i = 0; i < elements.length - 1; i++) {
    // noSwaps = true;
    for (let j = 0; j < elements.length - i - 1; j++) {
      if (hasPressedStop === true) {
        return;
      }
      elements[j].style.background = "blue";
      elements[j + 1].style.background = "blue";
      if (
        parseInt(elements[j].style.height) >
        parseInt(elements[j + 1].style.height)
      ) {
        await delayTime(delay);
        swap(elements[j], elements[j + 1]);
        // noSwaps = false;
      }
      elements[j].style.background = "#e43f5a";
      elements[j + 1].style.background = "#e43f5a";
    }
    elements[elements.length - 1 - i].style.background = "green";
    // if (noSwaps) break;
  }
  elements[0].style.background = "green";
}

const bubbleBtn = document.querySelector(".bubbleSort");
bubbleBtn.addEventListener("click", async function () {
  hasPressedStop = false;
  disableSorting();
  disableSizeSlider();
  disableNewArrayBtn();
  enableStopSortingBtn();
  await bubble();
  if (hasPressedStop === false) {
    enableSorting();
    enableSizeSlider();
  }
  enableNewArrayBtn();
  disableStopSortingBtn();
});
