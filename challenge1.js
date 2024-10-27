const students = {};

// prompts user for input and stores in object students
process.stdout.write(
  "Enter stduent's name and their marks in the format of name marks, enter done to exit: "
);

process.stdin.on("data", (data) => {
  const input = data.toString().trim();

  if (input.toLowerCase() === "done") {
    process.stdin.pause();

    console.log("NAME   MARKS   GRADE")
// iterates over the object and ouputs values 
    for (const key in students) {
      const grade = grading(students[key]);
      console.log(`${key}${students[key]}   ${grade}`);
    }
    return;
  }

  const [unpadedName, marksStr] = input.split(" ");

  let marks = parseInt(marksStr);
  let name = unpadedName.padEnd(8, ' ')
//checks if marks is NAN and > 100 or < 0 and prints ivalid if true
  if (isNaN(marks) || marks < 0 || marks > 100) {
    console.log("invalid number.Enter name and marks again");
    return;
  }
// adds key and value to the object
  students[name] = marks;
});
// takes in marks and ouputs grade
function grading(mark) {
  if (mark > 79) {
    return "A";
  } else if (mark >= 60 && mark <= 79) {
    return "A-";
  } else if (mark >= 50 && mark <= 59) {
    return "B+";
  } else if (mark >= 40 && mark <= 49) {
    return "B";
  } else {
    return "C";
  }
}
