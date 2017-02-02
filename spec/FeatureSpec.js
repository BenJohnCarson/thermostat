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
			thermostat.up(2)
			expect(thermostat.reportTemperature()).toEqual(22);
		});

		it('which can be decreased', function() {
			thermostat.down(2)
			expect(thermostat.reportTemperature()).toEqual(18);
		});
	});
});