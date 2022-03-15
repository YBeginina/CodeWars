
let alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

let randomString = "";

let i = 0;

while(i < 3) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
    i++;
}

console.log(randomString);

