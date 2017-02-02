'use strict';

describe('Thermostat', function() {

	var thermostat;

	beforeEach(function() {
		thermostat = new Thermostat;
	});

	it('has a default temperature of 20', function() {
		expect(thermostat._temperature).toEqual(20);
	});

	it('can increase the temperature', function() {
		thermostat.up();
		expect(thermostat._temperature).toEqual(21);
	});

	it('can decrease the temperature', function() {
		thermostat.down()
		expect(thermostat._temperature).toEqual(19);
	});

	it('cannot decrease the temperate below 10', function() {
		for (var i = 0; i < 10; i++) {
			thermostat.down()
		}
		expect(function() {thermostat.down()}).toThrowError('Cannot lower temperature below 10')
	});
});