'use strict';

function Thermostat() {
	var DEFAULT_TEMPERATURE = 20;
	this._temperature = DEFAULT_TEMPERATURE;
}

Thermostat.prototype.reportTemperature = function() {
	return this._temperature;
}

Thermostat.prototype.up = function(number) {
	this._temperature += number;
}

Thermostat.prototype.down = function(number) {
	this._temperature -= number;
}