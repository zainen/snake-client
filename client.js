const net = require('net');
const { IP, PORT } = require('./constants')
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
  })
  conn.on('data', (data) => {
    console.log('Message from server: ', data)
  })
  return conn
}

module.exports = { connect }
