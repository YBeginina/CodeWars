function scoreboard(string) {
    let score = {nil: 0, one: 1, two: 2, three: 3, four: 4,
                five: 5, six: 6, seven: 7, eight: 8, nine: 9};

    let arr = string.split(' ');
    return [score[arr[arr.length-2]],score[arr[arr.length-1]]];
}


console.log(scoreboard("The score is four nil"));
