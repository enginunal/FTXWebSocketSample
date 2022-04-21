const WebSocket = require('ws')
const connection = new WebSocket('wss://ftx.com/ws/');

let requestString = '{"op": "subscribe", "channel": "trades", "market": "BTC/USD"}';
//let requestString = '{"op": "subscribe", "channel": "orderbook", "market": "BTC/USD"}';
//let requestString = '{"op": "subscribe", "channel": "ticker", "market": "BTC/USD"}';

connection.onopen = () => {
  connection.send(requestString);
  let unsubscribe = requestString.replace('subscribe','unsubscribe');
  setTimeout(() => connection.send(unsubscribe) , 5000);
}
 
connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`);
}
 
connection.onmessage = (e) => {
  console.log(e.data);
}
