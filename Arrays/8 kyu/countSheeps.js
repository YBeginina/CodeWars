function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((p, i) => i===true ? p+i : p, 0);
}

console.log(countSheeps([true,  true,  null,  false,
    true,  true,  undefined,  true]));
