
const net = require("net");
//const setup =require(setupInput)

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: "50542",
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

	conn.on ('connect', () => {
		console.log("connected");
	  conn.write('Name: CAS');
		setTimeout(() => {
		conn.write("Move: up")}, 1000)
  });
	/*conn.on('move up', () => {setTimeout(() => {
		connection.write("Move: up")}, 1500)
	});
	conn.on('move up', () => {setTimeout(() => {
		connection.write("Move: up")}, 2000)
	});

	conn.on('move right', () => {setTimeout(() => {
		connection.write("Move: up")}, 3000)
	});
	*/

  conn.on("data", (data) => {
    console.log("DATA CAME IN!!!!!");
    console.log(`i work!, ${data}`);
});
  return conn;
};

module.exports = connect;