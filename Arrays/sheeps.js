function warnTheSheep(queue) {
if(queue.pop()=='wolf'){
    return 'Pls go away and stop eating my sheep'
}
else {
    let N = 1;
    while (queue[queue.length-1]=='sheep'){
        queue.pop();
        N++;
    }
    return 'Oi! Sheep number ' + N + '! You are about to be eaten by a wolf!';
}
}

console.log(warnTheSheep(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'wolf']));
