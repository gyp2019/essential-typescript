function countdown(initial, final, interval) {
  for (let i = initial; i < final; i += interval) {
    console.log(i);
  }
}

// countdown(0, 10, 1);

function countdownWithOption(initial, final = 10, interval = 1) {
  for (let i = initial; i < final; i += interval) {
    console.log(i);
  }
}

countdownWithOption(0, 20, 3);

countdownWithOption(0, 20);

countdownWithOption(0);
