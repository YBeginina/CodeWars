function gooseFilter (birds) {
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(item => !geese.includes(item));
  };

console.log(gooseFilter(["African","df", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]));
