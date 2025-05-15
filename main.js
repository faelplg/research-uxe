"use strict";

import {
	handleButtonClick,
	handleEvent,
} from "./experiments/events/eventHandlers.js";
import EventEmitter from "./experiments/events/eventEmitters.js";
import { person } from "./experiments/objects/objects.js";

const emitter = new EventEmitter();

emitter.on("test", handleEvent);
emitter.emit("test", { key: "test on" }); // Event received: { key: 'test on' }
emitter.off("test", handleEvent);
emitter.emit("test", { key: "test off" }); // No output

document.querySelector("button").addEventListener("click", handleButtonClick);

console.log("Person object", person);
