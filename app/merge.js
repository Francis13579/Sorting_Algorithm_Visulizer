// 4. Merge Sort

async function merge(arr, start, mid, end) {
  console.log("In merge()");
  const p1 = mid - start + 1;
  const p2 = end - mid;
  let left = new Array(p1);
  let right = new Array(p2);

  for (let i = 0; i < p1; i++) {
    if (hasPressedStop == true) return;
    await delayTime(delay);

    arr[start + i].style.background = "blue";
    left[i] = arr[start + i].style.height;
  }
  for (let i = 0; i < p2; i++) {
    if (hasPressedStop == true) return;
    await delayTime(delay);

    arr[mid + 1 + i].style.background = "cyan";
    right[i] = arr[mid + 1 + i].style.height;
  }
  await delayTime(delay);

  let i = 0,
    j = 0,
    k = start;
  while (i < p1 && j < p2) {
    if (hasPressedStop == true) return;
    await delayTime(delay);

    if (parseInt(left[i]) <= parseInt(right[j])) {
      if (p1 + p2 === arr.length) {
        arr[k].style.background = "green";
      } else {
        arr[k].style.background = "lightgreen";
      }

      arr[k].style.height = left[i];
      i++;
      k++;
    } else {
      if (p1 + p2 === arr.length) {
        arr[k].style.background = "green";
      } else {
        arr[k].style.background = "lightgreen";
      }
      arr[k].style.height = right[j];
      j++;
      k++;
    }
  }
  while (i < p1) {
    if (hasPressedStop == true) return;
    await delayTime(delay);

    if (p1 + p2 === arr.length) {
      arr[k].style.background = "green";
    } else {
      arr[k].style.background = "lightgreen";
    }
    arr[k].style.height = left[i];
    i++;
    k++;
  }
  while (j < p2) {
    if (hasPressedStop == true) return;
    await delayTime(delay);

    if (p1 + p2 === arr.length) {
      arr[k].style.background = "green";
    } else {
      arr[k].style.background = "lightgreen";
    }
    arr[k].style.height = right[j];
    j++;
    k++;
  }
}

async function mergeSort(arr, left, right) {
  if (left >= right) return;

  const middle = left + Math.floor((right - left) / 2);
  await mergeSort(arr, left, middle);
  await mergeSort(arr, middle + 1, right);
  await merge(arr, left, middle, right);
}

const mergeBtn = document.querySelector(".mergeSort");
mergeBtn.addEventListener("click", async function () {
  let arr = document.querySelectorAll(".bar");
  let left = 0;
  let right = parseInt(arr.length) - 1;
  // hasPressedStop = false;
  disableSorting();
  disableSizeSlider();
  disableNewArrayBtn();
  enableStopSortingBtn();
  await mergeSort(arr, left, right);
  if (hasPressedStop === false) {
    enableSorting();
    enableSizeSlider();
  }
  enableNewArrayBtn();
  disableStopSortingBtn();
});
