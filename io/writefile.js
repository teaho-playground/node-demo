var fs = require('fs');

fs.writeFile('./message.txt', 'this is a message',function(err){
    if(err) console.log('error');
    else console.log('success');
});

