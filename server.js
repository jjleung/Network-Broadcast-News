const net = require("net");
const PORT = 6969;
process.stdin.setEncoding("utf8");
const users = [];
let idNum = 0;
const chatLog = [];

const server = net.createServer(client => {
  client.id = idNum;
  idNum++;
  users.push(client);
  client.write(".....▄▄▄▄▀▀▀▀▀▀▀▀▄▄▄▄▄▄........\r\n");
  client.write(".....█....▒▒▒▒▒▒▒▒▒▒▒▒..▀▀▄....\r\n");
  client.write("....█...▒▒▒▒▒▒........▒▒▒..█...\r\n");
  client.write("...█......▄██▀▄▄.....▄▄▄....█..\r\n");
  client.write(".▄▀▒▄▄▄▒.█▀▀▀▀▄▄█...██▄▄█....█.\r\n");
  client.write("█.▒█▒▄.▀▄▄▄▀........█...▒▒▒▒▒.█\r\n");
  client.write("█.▒█.█▀▄▄.....█▀....▀▄..▄▀▀▀▄▒█\r\n");
  client.write(".█.▀▄.█▄.█▀▄▄.▀.▀▀.▄▄▀....█..█.\r\n");
  client.write("..█...▀▄▀█▄▄.█▀▀▀▄▄▄▄▀▀█▀██.█..\r\n");
  client.write("...█....██..▀█▄▄▄█▄▄█▄████.█...\r\n");
  client.write("....█....▀▀▄.█...█.█▀██████.█..\r\n");
  client.write(".....▀▄.....▀▀▄▄▄█▄█▄█▄█▄▀..█..\r\n");
  client.write(".......▀▄▄.▒▒▒▒..........▒...█.\r\n");
  client.write("..........▀▀▄▄.▒▒▒▒▒▒▒▒▒▒....█.\r\n");
  client.write("..............▀▄▄▄▄▄........█..\r\n\n");
  client.write("  * * WELCOME TO TROLLCHAT * *\r\n");
  client.write("To set username, type '$(username)'\r\n");

  client.on("data", data => {
    let msg = data.toString();
    let theUser;
    chatLog.push(msg);
    if (msg.indexOf("$") === 0) {
      client.name = msg.slice(1, msg.length - 1);
    } else if (!client.name) {
      client.name = "rando";
    }
    users.forEach((u, i) => {
      if (u.id === i) {
        theUser = u.name;
      }
    });
    broadcast(msg, client);
  });

  const broadcast = (message, sender) => {
    users.forEach(user => {
      // Don't want to send it to sender
      if (user === sender) {
        return;
      }

      user.write(`${sender.name}:${message}`);
    });
    // Log it to the server output too
    process.stdout.write(`${sender.name}:${message}`);
  };

  process.stdin.on("readable", () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
      client.write(`Trollmaster: ${chunk}`);
    }
  });

  process.stdin.on("end", () => {
    // client.write("end");
  });

  client.on("end", () => {
    // client.write("Hue");
  });
});

server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
