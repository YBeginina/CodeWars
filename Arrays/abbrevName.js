function abbrevName(name){
name = name.split(' ');
let abbrevArr = [name[0][0], name[1][0]];
return abbrevArr.join('.').toUpperCase();
}

console.log(abbrevName('Asdf Rgdrg'));
