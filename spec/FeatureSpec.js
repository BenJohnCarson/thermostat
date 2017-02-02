'use strict';

describe('feature', function() {

	var thermostat;

	beforeEach(function() {
		thermostat = new Thermostat()
	});

	describe('the thermostat can report the current temperature', function() {
		it('which defaults to 20', function() {
			expect(thermostat.reportTemperature()).toEqual(20);
		});

		it('which can be increased', function() {
			thermostat.up()
			expect(thermostat.reportTemperature()).toEqual(21);
		});

		it('which can be decreased', function() {
			thermostat.down()
			expect(thermostat.reportTemperature()).toEqual(19);
		});

		it('which cannot be lowered past 10', function() {
			for (var i = 0; i < 10; i++) {
				thermostat.down()
			}	
			expect(function() {thermostat.down()}).toThrowError('Cannot lower temperature below 10')		
			expect(thermostat.reportTemperature()).toEqual(10);
		});
	});

	describe('the thermostat has an power saving mode', function() {
		it('which is switched on by default', function() {
			expect(thermostat.isPowerSaving()).toBe(true)
		});

		it('which can be switched off', function() {
			thermostat.switchPowerMode();
			expect(thermostat.isPowerSaving()).toBe(false)
		});
	});

	describe('when power saving mode is on', function() {
		it('the temperature cannot be raised past 25', function () {
			for (var i = 0; i < 5; i++) {
				thermostat.up()
			}	
			expect(function() {thermostat.up()}).toThrowError('Cannot raise temperature above 25')		
			expect(thermostat.reportTemperature()).toEqual(25);
		});
	});

	describe('when power saving mode is off', function() {
		it('the temperature cannot be raised past 32', function () {
			thermostat.switchPowerMode();
			for (var i = 0; i < 12; i++) {
				thermostat.up()
			}	
			expect(function() {thermostat.up()}).toThrowError('Cannot raise temperature above 32')		
			expect(thermostat.reportTemperature()).toEqual(32);
		});
	});
});