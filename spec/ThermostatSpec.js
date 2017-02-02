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
		thermostat.up(2);
		expect(thermostat._temperature).toEqual(22);
	});
});