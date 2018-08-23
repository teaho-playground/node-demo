/**
 *
 * 在子域内运行的代码可以随意抛出异常，而这些异常可以通过子域对象的error事件统一捕获。
 *
 * 代码不能执行，需作更改
 */
var http = require('http');
var domain = require('domain');

function async(request, callback) {
    // Do something.
    asyncA(request, function (data) {
        // Do something
        asyncB(request, function (data) {
            // Do something
            asyncC(request, function (data) {
                // Do something
                console.log("err");
                throw new Error("111");
                callback(data);

            });
        });
    });
}

http.createServer(function (request, response) {
    var d = domain.create();

    d.on('error', function () {
        console.log("error")
        response.writeHead(500);
        response.end();
    });

    d.run(function () {
        console.log("domain run");
        async(request, function (data) {
            response.writeHead(200);
            response.end(data);
        });
    });
}).listen(22201);