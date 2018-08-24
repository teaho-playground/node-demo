/* parent.js */
var child_process = require('child_process');

var child = child_process.spawn('node', [ 'child.js' ]);
// console.log(child);
child.kill('SIGTERM');
