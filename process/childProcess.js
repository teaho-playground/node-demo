//windows dir copy demo
var child_process = require('child_process');
var util = require('util');
const iconv = require('iconv-lite');

function copy(source, target, callback) {
    child_process.exec(
        util.format('XCOPY %s\\* %s /s /e /y', source, target), { encoding: 'buffer' }, callback);
}

copy('D:\\test\\demo1', 'D:\\test\\demo2', function (err, stdout, stderr) {
    // if (err) {
    //     // console.error(`exec error: ${err}`);
    //     // console.log(iconv.decode(err, 'cp936'))
    //     console.error(`error ${err.message}`);
    //     // err.each(2,function(data){
    //     //     arr.push(parseInt(data,16));
    //     // });
    //     console.log(iconv.decode(err.message, 'utf8'))
    //     return;
    // }
    console.log(iconv.decode(stdout, 'cp936'));
    console.log(iconv.decode(stderr, 'cp936'));

});