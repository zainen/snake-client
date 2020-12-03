const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', () => {
    conn.write('Name: MAR')
    console.log('connected')
    
    for (let x = 0; x < 10; x++) {
      if (x % 2 === 0) {
        // setTimeout(() => {
          conn.write('Move: up')
        // }, 300)
      } else {
        // setTimeout(() => {
          conn.write('Move: left')
        // }, 400)
      }
    }
    // setInterval(() => {
    //   conn.write('Move: up')

    // }, 500)
    // setInterval(() => {
    //   conn.write('Move: right')
    // }, )


  })
  conn.on('data', (data) => {
    console.log('Message from server: ', data)
  })
  return conn
}

module.exports = { connect }
