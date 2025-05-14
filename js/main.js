"use strict";

import { handleButtonClick, handleEvent } from "./events/eventHandlers.js";
import EventEmitter from "./events/eventEmitters.js";

const emitter = new EventEmitter();

emitter.on("test", handleEvent);
emitter.emit("test", { key: "test on" }); // Event received: { key: 'test on' }
emitter.off("test", handleEvent);
emitter.emit("test", { key: "test off" }); // No output

document.querySelector("button").addEventListener("click", handleButtonClick);
