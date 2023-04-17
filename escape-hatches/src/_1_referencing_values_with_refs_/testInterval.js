let num = 0

let inter = setInterval(function() {
    console.log(num);
    num += 1;
    clear();
}, 1000);

function clear() {
    if (num === 10) {
        clearInterval(inter);
    }
}




