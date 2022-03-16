/*
let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

let randomString = "";

let i = 0;

while(i < 3) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
    i++;
}

console.log(randomString); */


let input = "javascript is awesome";
let output = "";

/* for (let i = 0; i < input.length; i++) {
    if(input[i]==='a'){
        output += '4';
    }
    else if (input[i]==='e'){
        output += '3';
    }
    else if (input[i]==='i'){
        output += '1';
    }
    else if (input[i]==='o'){
        output += '0';
    }
    else {
        output += input[i];
    }
} */

for (let i = 0; i < input.length; i++) {
switch(input[i]) {
    case 'a':
    case 'A':
        output += '4';
        break;

    case 'e':
    case 'E':
        output += '3';
        break;

    case 'i':
    case 'I':
        output += '1';
        break;

    case 'o':
    case 'O':
        output += '0';
        break;

    default:
        output += input[i];
        break;
  }
}
console.log(output);
