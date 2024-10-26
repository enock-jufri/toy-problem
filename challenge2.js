process.stdout.write("Enter speed: ");

process.stdin.on("data", (data) => {
  const input = parseInt(data);
  console.log(calculator(input));
  process.stdin.pause();
});

function calculator(speed) {
  if (speed <= 70) {
    return "Ok";
  } else if (speed > 70) {
    let newSpeed = speed - 70;

    demeritPoints = Math.floor(newSpeed / 5);
    if (demeritPoints <= 12) {
      return demeritPoints;
    } else {
      return "License suspended";
    }
  }
}
