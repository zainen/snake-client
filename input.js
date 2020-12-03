let connection;


const setupInput = function(conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.on('data', handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === '\u0077'){
    connection.write('Move: up')
  } else if (key === '\u0061') {
    connection.write('Move: left')
  } else if (key === '\u0073') {
    connection.write('Move: down')
  } else if (key === '\u0064') {
    connection.write('Move: right')    
  }

}

module.exports = { setupInput }