function findMinPossitive(arr, min = arr[0], index = 0) {
    if (index === arr.length) return min

    if (arr[index] > 0 && arr[index] < min) min = arr[index]
    index++
    return findMinPossitive(arr, min, index);
}

console.log(findMinPossitive([-4, -5]))