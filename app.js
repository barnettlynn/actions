"use strict";
exports.__esModule = true;
exports.handler = void 0;
function handler(event, context, callback) {
    var response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello, the current time is ".concat(new Date().toTimeString(), ".")
        })
    };
    return response;
}
exports.handler = handler;
console.log("Hello world");
