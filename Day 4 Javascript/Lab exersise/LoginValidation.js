let correctUser = "admin";
let correctPass = "1234";
let attempts = 0;

while (attempts < 3) {
  let user = "admin"; // simulate input
  let pass = "1234";

  if (user === correctUser && pass === correctPass) {
    console.log("Login Successful");
    break;
  } else {
    console.log("Invalid Credentials");
  }
  attempts++;
}
