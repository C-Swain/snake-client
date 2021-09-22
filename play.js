const connect = require('./client');
connect();
const handleUserInput = function (data) {
	if (data === '\u0003') {
		process.exit();
	}
	if (data === 'w') {
		conn.write("Move: up");
	};


 
};
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
	stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};
