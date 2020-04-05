//server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();


const openvpnmanager = require('node-openvpn');
 
const opts = {
  host: '127.0.0.1', // normally '127.0.0.1', will default to if undefined
  port: 1337, //port openvpn management console
  timeout: 1500, //timeout for connection - optional, will default to 1500ms if undefined
  logpath: 'log.txt' //optional write openvpn console output to file, can be relative path or absolute
};
const auth = {
  user: 'vpnUserName',
  pass: 'vpnPassword',
};
const openvpn = openvpnmanager.connect(opts)
 
// will be emited on successful interfacing with openvpn instance
openvpn.on('connected', () => {
  openvpnmanager.authorize(auth);
});
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);