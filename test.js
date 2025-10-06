function capitaliseFirstLetter(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
        }
        return arr;
    }
}
let str = ["DANIEL", "KELSEY", "KARLY"];
console.log(capitaliseFirstLetter(str));
