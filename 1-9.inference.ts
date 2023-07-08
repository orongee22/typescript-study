let text = "hello";
// text = 10; // Error!

function print(message) {
  console.log(message);
}

print(10); // message: any

function printStr(message = "hello") {
  // message: string
  console.log(message);
}
// printStr(10); // Error!
