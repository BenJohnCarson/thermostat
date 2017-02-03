$(document).ready(function() {
	var thermostat = new Thermostat();
	updateTemp()

	$('.tempup').click(function () {
		thermostat.up();
		updateTemp()
	});

	$('.tempdown').click(function () {
		thermostat.down();
		updateTemp()
	});

	$('.reset').click(function () {
		thermostat.reset();
		updateTemp()
	});

	$('.onoffswitch-label').click(function () {
		thermostat.switchPowerMode();
		if (thermostat.isPowerSaving()){
			$('.powersavelight').css("background", "green")
		} else {
			$('.powersavelight').css("background", "grey")
		}			
	})

	function updateTemp() {
	$('.currenttemp').text(thermostat._temperature);
	console.log(thermostat.reportEnergyUsage())
	$('#energyusagelight').attr('class', thermostat.reportEnergyUsage());
	}
});

