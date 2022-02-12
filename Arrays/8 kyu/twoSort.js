function twoSort(s) {
s=s.sort();
return s[0].split('').join('***');
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));
