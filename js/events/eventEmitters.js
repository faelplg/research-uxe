"use strict";

/**
 * EventEmitter class provides a mechanism to manage and handle custom events.
 */
export default class EventEmitter {
	/**
	 * Initializes a new instance of the EventEmitter class.
	 */
	constructor() {
		this.events = {};
	}

	/**
	 * Registers a listener for a specific event.
	 * @param {string} event - The name of the event to listen for.
	 * @param {Function} listener - The callback function to execute when the event is emitted.
	 */
	on(event, listener) {
		if (!this.events[event]) {
			this.events[event] = [];
		}
		this.events[event].push(listener);
	}

	/**
	 * Removes a specific listener for a given event.
	 * @param {string} event - The name of the event to remove the listener from.
	 * @param {Function} listener - The callback function to remove.
	 */
	off(event, listener) {
		if (!this.events[event]) return;

		this.events[event] = this.events[event].filter((l) => l !== listener);
	}

	/**
	 * Emits an event, invoking all registered listeners for that event.
	 * @param {string} event - The name of the event to emit.
	 * @param {...any} args - Arguments to pass to the event listeners.
	 */
	emit(event, ...args) {
		if (!this.events[event]) return;

		this.events[event].forEach((listener) => listener(...args));
	}

	/**
	 * Registers a one-time listener for a specific event.
	 * The listener is automatically removed after being invoked once.
	 * @param {string} event - The name of the event to listen for.
	 * @param {Function} listener - The callback function to execute when the event is emitted.
	 */
	once(event, listener) {
		const wrapper = (...args) => {
			listener(...args);
			this.off(event, wrapper);
		};
		this.on(event, wrapper);
	}

	/**
	 * Prints the current state of registered events and their listeners to the console.
	 */
	printEvents() {
		console.log(`CLASS:`, this.events);
	}
}
