
const sumMatrixData = (arr) => {

    // initial
    let sum = 0;

    // proses
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {

            sum += arr[i][j];
        }
    }

    // return
    return sum;
}

let matrix = [
    [2,4,6,5], // 0
    [1,9,1],   // 1
    [2,2,6,8]  // 2
]

let sum = sumMatrixData(matrix);
console.log(sum); // 46
