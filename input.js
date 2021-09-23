let conn;
const handleUserInput = function (key) {
	if(key === 't') {
let msg = 'SsSsSsS!';
conn.write(`Say: ${msg}`)}
  if(key === 'w') {conn.write("Move: up");}
  if(key === 'a') {conn.write("Move: left");}
  if(key === 'd'){conn.write("Move: right"); }
  if(key === 's'){conn.write("Move: down"); }
};

const setupInput = function (connection) {
	conn = connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
	stdin.on("data", handleUserInput);
  return stdin;
};

module.exports =  setupInput;