// 3. Insertion Sort

async function insertionSort() {
  const elements = document.querySelectorAll(".bar");
  elements[0].style.background = "green";
  for (let i = 1; i < elements.length; i++) {
    if (hasPressedStop === true) return;

    let j = i - 1;
    let currentValue = elements[i].style.height;
    elements[i].style.background = "blue";

    await delayTime(delay);
    if (hasPressedStop === true) return;

    while (
      j >= 0 &&
      parseInt(elements[j].style.height) > parseInt(currentValue)
    ) {
      if (hasPressedStop === true) return;

      elements[j].style.background = "blue";
      elements[j + 1].style.height = elements[j].style.height;
      j--;

      await delayTime(delay);
      if (hasPressedStop === true) return;

      for (let k = i; k >= 0; k--) {
        elements[k].style.background = "green";
      }
    }
    elements[j + 1].style.height = currentValue;
    elements[i].style.background = "green";
  }
}

const insertionBtn = document.querySelector(".insertionSort");
insertionBtn.addEventListener("click", async function () {
  hasPressedStop = false;
  disableSorting();
  disableSizeSlider();
  disableNewArrayBtn();
  enableStopSortingBtn();
  await insertionSort();
  if (hasPressedStop === false) {
    enableSorting();
    enableSizeSlider();
  }
  enableNewArrayBtn();
  disableStopSortingBtn();
});
