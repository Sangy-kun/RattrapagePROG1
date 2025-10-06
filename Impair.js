function OnlyOddNumber(num) {
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num[i].length; j++) {
            if (num[i] !== num[j]){
                return num[i];
            }
        }
    }
}
let array1 = [1,1,2,2,4,5,5];
console.log(OnlyOddNumber(array1));
