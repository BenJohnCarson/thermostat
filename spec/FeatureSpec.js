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
});