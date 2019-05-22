var events = require('events');

var eventEmitter = new events.EventEmitter();
eventEmitter.emit("myevent");

//handling events
eventEmitter.on("myevent", function () {
    console.log("event handled successfully");
});

