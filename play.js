const net = require('net');

/**
 * Establishes connection with the game server
 */
const { connect } = require('./client')
const { setupInput } = require('./input')

console.log('Connecting ...');
let conn = connect();

setupInput(conn)
