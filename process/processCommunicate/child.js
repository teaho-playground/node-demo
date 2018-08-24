/* child.js */
console.log("child")
process.on('SIGTERM', function () {
    console.debug("receive SIGTERM");
    cleanUp();
    process.exit(0);
});
