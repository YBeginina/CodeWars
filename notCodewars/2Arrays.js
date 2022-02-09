//Заданы 2 массива целых чисел размером по 100 элементов каждый, в которых содержатся длины и ширины ста прямоугольников. Индекс в массиве соответствует номеру прямоугольника. Нужно написать фрагмент программы для поиска следующих величин:
//1. Определить количество прямоугольников, в которых ширина больше длины.

function widthMoreLengthLess(arrL, arrW){
    let count = 0;
        for (let i = 0; i < arrW.length; i++) {
            if (arrL[i] < arrW[i]){
                count += 1;
            }
        }
    return count;
}

//2. Определить количество прямоугольников, в которых длина больше ширины.

function lengthMoreWidthLess(arrL, arrW){
    let count = 0;
        for (let i = 0; i < arrW.length; i++) {
            if (arrL[i] > arrW[i]){
                count += 1;
            }
        }
    return count;
}

//3. Определить номер прямоугольника с самой длинной диагональю

function theLongestDiagonal(arrL, arrW){
    return Math.max.apply(null, arrL.map(function(item){
        for (let i = 0; i < arrW.length; i++) {
            return Math.sqrt(Math.pow(item, 2) + Math.pow(arrW[i],2));
        }
    }))
}

let arrL = [1,5,3,8,6,7,9,8];
let arrW = [2,3,4,2,4,8,4,7];

console.log(widthMoreLengthLess(arrL,arrW));
console.log(lengthMoreWidthLess(arrL,arrW));
console.log(theLongestDiagonal(arrL,arrW));
