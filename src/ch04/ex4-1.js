function countdown(initial, final, interval) {
    for (var i = initial; i < final; i += interval) {
        console.log(i);
    }
}
// countdown(0, 10, 1);
function countdownWithOption(initial, final, interval) {
    if (final === void 0) { final = 10; }
    if (interval === void 0) { interval = 1; }
    for (var i = initial; i < final; i += interval) {
        console.log(i);
    }
}
countdownWithOption(0, 20, 3);
countdownWithOption(0, 20);
countdownWithOption(0);
