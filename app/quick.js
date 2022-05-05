// 5. Quick Sort

async function quick(arr, left, right) {
  let i = left - 1;
  arr[right].style.background = "#b85ee6";
  for (let j = left; j <= right - 1; j++) {
    if (hasPressedStop === true) return;

    arr[j].style.background = "yellow";
    await delayTime(delay);
    if (hasPressedStop === true) return;

    if (parseInt(arr[j].style.height) < parseInt(arr[right].style.height)) {
      i++;
      swap(arr[i], arr[j]);
      arr[i].style.background = "orange";
      if (i != j) arr[j].style.background = "orange";

      await delayTime(delay);
    } else {
      arr[j].style.background = "blue";
    }
  }
  i++;
  if (hasPressedStop === true) return;
  swap(arr[i], arr[right]);

  arr[right].style.background = "blue";
  arr[i].style.background = "green";

  if (hasPressedStop === true) return;

  await delayTime(delay);
  if (hasPressedStop === true) return;

  // for coloring
  for (let k = 0; k < arr.length; k++) {
    if (arr[k].style.background !== "green") {
      arr[k].style.background = "cyan";
    }
  }
  return i;
}

async function quickSort(arr, left, right) {
  if (left < right) {
    let pivotIdx = await quick(arr, left, right);
    await quickSort(arr, left, pivotIdx - 1);
    await quickSort(arr, pivotIdx + 1, right);
  } else {
    if (left >= 0 && right >= 0 && left < arr.length && right < arr.length) {
      arr[right].style.background = "green";
      arr[left].style.background = "green";
    }
  }
}

const quickBtn = document.querySelector(".quickSort");
quickBtn.addEventListener("click", async function () {
  let arr = document.querySelectorAll(".bar");
  let left = 0;
  let right = arr.length - 1;
  // hasPressedStop = false;
  disableSorting();
  disableSizeSlider();
  disableNewArrayBtn();
  enableStopSortingBtn();
  await quickSort(arr, left, right);
  if (hasPressedStop === false) {
    enableSorting();
    enableSizeSlider();
  }
  enableNewArrayBtn();
  disableStopSortingBtn();
});
