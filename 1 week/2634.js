/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const val = []
    for (let i = 0; i<arr.length; i++){
        if (fn(arr[i],i)){val.push(arr[i])}
    }
    return val
 };