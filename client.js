const net = require("net");
let username = "rando";
let userid;
process.stdin.setEncoding("utf8");
const server = net.createConnection(7070, "0.0.0.0", () => {
  console.log(".....▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄........");
  console.log(".....█....▒▒▒▒▒▒▒▒▒▒▒▒..▀▀▄....");
  console.log("....█...▒▒▒▒▒▒........▒▒▒..█...");
  console.log("...█......▄██▀▄▄.....▄▄▄....█..");
  console.log(".▄▀▒▄▄▄▒.█▀▀▀▀▄▄█...██▄▄█....█.");
  console.log("█.▒█▒▄.▀▄▄▄▀........█...▒▒▒▒▒.█");
  console.log("█.▒█.█▀▄▄.....█▀....▀▄..▄▀▀▀▄▒█");
  console.log(".█.▀▄.█▄.█▀▄▄.▀.▀▀.▄▄▀....█..█.");
  console.log("..█...▀▄▀█▄▄.█▀▀▀▄▄▄▄▀▀█▀██.█..");
  console.log("...█....██..▀█▄▄▄█▄▄█▄████.█...");
  console.log("....█....▀▀▄.█...█.█▀██████.█..");
  console.log(".....▀▄.....▀▀▄▄▄█▄█▄█▄█▄▀..█..");
  console.log(".......▀▄▄.▒▒▒▒..........▒...█.");
  console.log("..........▀▀▄▄.▒▒▒▒▒▒▒▒▒▒....█.");
  console.log("..............▀▄▄▄▄▄........█..");
  console.log("* * WELCOME TO TROLLCHAT * *");
  console.log("To set username, type '$(username)'");
  server.write("New user has entered the battle.");

  server.on("data", data => {
    console.log(data.toString());
  });
});

process.stdin.on("readable", () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    server.write(chunk);
  }
});

process.stdin.on("end", () => {
  // server.write("end");
});
