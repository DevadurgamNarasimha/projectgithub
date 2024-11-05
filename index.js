function forEachCustom(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

// Example usage:
const num = [1, 2, 3, 4, 5];
forEachCustom(num, (element, index) => {
    console.log(element , index);
});