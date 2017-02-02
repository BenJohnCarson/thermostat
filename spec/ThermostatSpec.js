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

	it('can reset the temperature', function() {
		thermostat.down();
		thermostat.reset();
		expect(thermostat._temperature).toEqual(20);
	});

	it('raises an error when lowered below minimum temperature', function() {
		for (var i = 0; i < 10; i++) {
			thermostat.down()
		}
		expect(function() {thermostat.down()}).toThrowError('Cannot lower temperature below 10')
	});

	it('is switched to power saving by default', function() {
		expect(thermostat._powerSavingOn).toBe(true)
	});

	it('can switch power saving mode off', function() {
		thermostat.switchPowerMode()
		expect(thermostat._powerSavingOn).toBe(false)
	});

	it('raises an error when raised above maximum temperature', function() {
		for (var i = 0; i < 5; i++) {
			thermostat.up()
		}
		expect(function() {thermostat.up()}).toThrowError('Cannot raise temperature above 25')
	});
});