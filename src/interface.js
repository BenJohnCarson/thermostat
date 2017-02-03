

$(document).ready(function() {
	var localHost = "http://localhost:4567";
	getFromServer();
	var thermostat = new Thermostat();
	updateTemp();

 	$('.select-city').submit(function(event) {
  		event.preventDefault();
  		var city = $('.current-city').val();
  		$.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=28da720ac77959beb32c9a1a92ebf7d7&units=metric', function(data) {
    		$('.outsidetemp').text(data.main.temp);
  		});
	});

	$('.tempup').click(function () {
		thermostat.up();
		updateTemp();
	});

	$('.tempdown').click(function () {
		thermostat.down();
		updateTemp();
	});

	$('.reset').click(function () {
		thermostat.reset();
		updateTemp();
	});

	$('.onoffswitch-label').click(function () {
		thermostat.switchPowerMode();
		if (thermostat.isPowerSaving()){
			$('.powersavelight').css("background", "green")
		} else {
			$('.powersavelight').css("background", "grey")
		}			
	});

	function updateTemp() {
	$('.currenttemp').text(thermostat._temperature);
	$('#energyusagelight').attr('class', thermostat.reportEnergyUsage());
	postToServer();
	}
	
	function postToServer() {
		$.post(localHost + "/temperature", {'temperature': thermostat.reportTemperature()})
	}
	
	function getFromServer() {
		$.get(localHost + "/temperature", function(response) {
			console.log(response.temperature);						
		});
	}
});

