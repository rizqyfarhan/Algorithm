function binarySearch(arr, val) {
    var l = 0;
    var h = arr.length-1;
    var m = Math.floor((l + h) / 2);
    var found = false;

    while(l <= h && found === false) {
        m = Math.floor((l + h) / 2);
        if(val < arr[m]) {
            h = m - 1;
        } else if(val > arr[m]) {
            l = m + 1;
        } else {
            return arr[m];
            found = true;
        }
    }
}

var arr = [1, 2, 3, 4, 5];
console.log(binarySearch(arr, 4));

