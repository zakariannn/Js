function smallestPositiveNumber(arr) {
    arr = arr.filter(function(x){ return x > -1 })
    if(arr.length == 0){
        return -1
    }

    if (arr.length == 1) {
        return arr[0]
    }

    return Math.min(arr[arr.length - 1], smallestPositiveNumber(arr.splice(0, arr.length - 2)))
}

console.log(smallestPositiveNumber([-5, -9, -111, -1000, -7]))
