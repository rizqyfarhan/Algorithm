function bubbleSort(arr) {
    var n = arr.length;

    for(var i=0; i<n; i++) {
        for(var j=0; j<n-i; j++) {
            if(arr[j] > arr[j+1]) {
                var temp = 0;
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
            }
        }
    }
    console.log(arr);
}

var arr = [22, 1, 100, 5, 70];
bubbleSort(arr);
