let sum = function(array) {
    if (array.length === 0) {
        return 0;
    }

    function add(array, i) {
        // console.log(array[i]);
        if (i === array.length - 1) {
            return array[i];
        }
        return array[i] + add(array, i + 1);
    }
    return add(array, 0);
};
console.log(sum([1, 2, 3, 4, 5, 6]));