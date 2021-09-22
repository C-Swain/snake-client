const handleUserInput = function (data) {
	if (data === '\u0003') {
		process.exit();
	}
	if (data==='w') { co
		connection.write("Move:up");
	};
	if (data==='s') {
		connection.write("Move:down");
	};
	if (data === 'd') {
		connection.write("Move:right");
	};
	if (data==='w') {
		connection.write("Move:left");
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

module.exports =  setupInput;