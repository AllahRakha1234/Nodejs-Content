import EventEmitter from 'events';

const MyEventEmitter = new EventEmitter;

MyEventEmitter.on("WaterFull", () => {
    console.log("Turn of the motor.");
    setTimeout(() => {
        console.log("Please turn of the motor.");
    })
})

console.log("Script is running.");
MyEventEmitter.emit("WaterFull");
console.log("Script is still running.");