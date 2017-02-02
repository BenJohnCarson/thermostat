'use strict';

function Thermostat() {
	this._temperature = 20;
	this._minTemperature = 10;
	this._maxTemperature = 25;
	this._powerSavingOn = true;
}

Thermostat.prototype.reportTemperature = function() {
	return this._temperature;
}

Thermostat.prototype.up = function() {
	if ((this._temperature + 1) > this._maxTemperature) {
		throw new Error('Cannot raise temperature above ' + this._maxTemperature)
	}
	this._temperature += 1;
}

Thermostat.prototype.down = function() {
	if ((this._temperature - 1) < this._minTemperature) {
		throw new Error('Cannot lower temperature below 10')
	}
	this._temperature -= 1;
}

Thermostat.prototype.reset = function() {
	this._temperature = 20;
}

Thermostat.prototype.isPowerSaving = function() {
	return this._powerSavingOn;
}

Thermostat.prototype.switchPowerMode = function () {
	if (this._powerSavingOn) {
		this._powerSavingOn = false
		this._maxTemperature = 32;
	} else {
		this._powerSavingOn = true
		this._maxTemperature = 25;
	}
}