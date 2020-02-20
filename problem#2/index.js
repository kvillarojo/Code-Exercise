
    function arrangeArrayString(arr) {
        let indexStr = '';
        for(let i = 0; i < arr.length; i++){
            for(let j = i + 1; j < arr.length; j++){
                if(arr[i] < arr[j]){
                    indexStr = arr[i];
                    arr[i] = arr[j];
                    arr[j] = indexStr;
                }
            }
        }

        return arr;
    }

   // console.log(arrangeArrayString(['G', 'B', 'R', 'R', 'B', 'R', 'G']));

