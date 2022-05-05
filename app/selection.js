// 2. Selection Sort

async function selectionSort(arr) {
  const elements = document.querySelectorAll(".bar");
  for (let i = 0; i < elements.length; i++) {
    if (hasPressedStop === true) {
      return;
    }

    let minimum = i;
    elements[i].style.background = "yellow";
    for (let j = i + 1; j < elements.length; j++) {
      if (hasPressedStop === true) {
        return;
      }

      elements[j].style.background = "cyan";

      await delayTime(delay);
      if (hasPressedStop === true) {
        return;
      }
      if (
        parseInt(elements[j].style.height) <
        parseInt(elements[minimum].style.height)
      ) {
        if (minimum !== i) {
          elements[minimum].style.background = "gray";
        }
        minimum = j;
      } else {
        elements[j].style.background = "gray";
      }
    }
    await delayTime(delay);
    if (hasPressedStop === true) {
      return;
    }

    if (i !== minimum) {
      swap(elements[minimum], elements[i]);
      elements[minimum].style.background = "gray";
    }
    elements[i].style.background = "green";
  }
}

const selectionBtn = document.querySelector(".selectionSort");
selectionBtn.addEventListener("click", async function () {
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
