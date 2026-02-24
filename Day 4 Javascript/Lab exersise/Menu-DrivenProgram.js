let data = [];
let choice = 1;

do {
  switch (choice) {
    case 1:
      data.push(10);
      console.log("Element Added");
      break;
    case 2:
      data.pop();
      console.log("Element Removed");
      break;
    case 3:
      console.log(data);
      break;
    case 4:
      console.log("Exit");
      break;
  }
  choice++;
} while (choice <= 4);
