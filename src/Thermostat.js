'use strict';

function Thermostat() {
	var DEFAULT_TEMPERATURE = 20;
	this._temperature = DEFAULT_TEMPERATURE;
	this._minTemperature = 10
}

Thermostat.prototype.reportTemperature = function() {
	return this._temperature;
}

Thermostat.prototype.up = function() {
	this._temperature += 1;
}

Thermostat.prototype.down = function() {
	if ((this._temperature - 1) < this._minTemperature) {
		throw new Error('Cannot lower temperature below 10')
	}
	this._temperature -= 1;
}