//https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding
http.get("http://website.com/", function(res) {
    var chunks = [];
    res.on('data', function(chunk) {
        chunks.push(chunk);
    });
    res.on('end', function() {
        var decodedBody = iconv.decode(Buffer.concat(chunks), 'win1252');
        console.log(decodedBody);
    });
});

// Or, with iconv-lite@0.4 and Node v0.10+, you can use streaming support with `collect` helper
http.get("http://website.com/", function(res) {
    res.pipe(iconv.decodeStream('win1252')).collect(function(err, decodedBody) {
        console.log(decodedBody);
    });
});