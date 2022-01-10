// Temperatur Schieberegler

  var sliderValue = document.querySelector("#span");
  var inputSlider = document.querySelector("#input");


	var sliderEl = jQuery('#span');
	var inputEl = jQuery('#input');

	var slider2El = jQuery('#span2');
	var input2El = jQuery('#input2');




// Luftfeuchtigkeit Schieberegler

  var sliderValue2 = document.querySelector("#span2");
  var inputSlider2 = document.querySelector("#input2");


function calc() {
      	var valuetemp = inputSlider.value/2;
      	var valuehum = inputSlider2.value;

		let value = inputSlider.value/2 + " °C";
        sliderValue.textContent = value;

		let value2 = inputSlider2.value + ".0 %";
        sliderValue2.textContent = value2;



	// Temp and hum Factor Berechnung
	 	var temperatureFactor = Math.exp(19.016 - 4064.95 / (valuetemp + 236.25)) * 100.0;
		var humidityFactor = 0.622 * (valuehum / 100.0) * temperatureFactor / (100000.0 - valuehum / 100.0 * temperatureFactor) * 1000.0;

	// Taupunkt Berechnung
		var taupunkt = -4064.95 / (Math.log(101325.0 * humidityFactor / (622.0 + humidityFactor)) - 23.621) - 236.25;
		var roundedTaupunkt = Math.round((taupunkt + Number.EPSILON) * 10) / 10;
			jQuery(".cb-result-taupunkt").html(roundedTaupunkt + " °C");

	// Enthalpie Berechnung
		var enthalpie = 1.005 * valuetemp + humidityFactor / 1000.0 * (2500.0 + 1.86 * valuetemp);
		var roundedEnthalpie = Math.round((enthalpie + Number.EPSILON) * 10) / 10;
			jQuery(".cb-result-enthalpie").html(roundedEnthalpie + " kJ/kg");

	// Feuchtegehalt Berechnung
		var feuchtegehalt = (10.0 * humidityFactor) / 10.0;
		var roundedFeuchtegehalt = Math.round((feuchtegehalt + Number.EPSILON) * 10) / 10;
			jQuery(".cb-result-feuchtegehalt").html(roundedFeuchtegehalt + " g/kg");

	// Vol Berechnung
		var vol = humidityFactor / 621.98004 * 100.0 / (1.0 + humidityFactor / 621.98004);
		var roundedVol = Math.round((vol + Number.EPSILON) * 1000) / 1000;
			jQuery(".cb-result-vol").html(roundedVol);

	// Feuchtekugel Berechnung
   		var d;
    	var wetBulbValue = -4.0;

    do {
        wetBulbValue = wetBulbValue + 5.0;

			if (wetBulbValue <= 0) {
				d = Math.exp(22.509 * (1.0 - 273.16 / (273.15 + wetBulbValue))) * 611.657;
			} else {
				d = Math.exp(19.0163 - 4064.95 / (wetBulbValue + 236.25)) * 100.0;
			}
    }
	while (enthalpie - (1.005 * wetBulbValue + 0.622 * d / (100000.0 - 1.0 * d) * (2500.0 + 1.86 * wetBulbValue)) > 0);

    do {
        wetBulbValue = wetBulbValue - 0.01;

			if (wetBulbValue <= 0) {
				d = Math.exp(22.509 * (1.0 - 273.16 / (273.15 + wetBulbValue))) * 611.657;
			} else {
				d = Math.exp(19.016 - 4064.95 / (wetBulbValue + 236.25)) * 100.0;
			}
    }
	while (enthalpie - (1.005 * wetBulbValue + 0.622 * d / (100000.0 - 1.0 * d) * (2500.0 + 1.86 * wetBulbValue)) <= 0);

		var roundedWetBlubValue = Math.round((wetBulbValue + Number.EPSILON) * 10) / 10;
			jQuery(".cb-result-feuchtekugel").html(roundedWetBlubValue + " °C");


	// Title on click
			jQuery(".cb-title-taupunkt").html("Taupunkt");
			jQuery(".cb-title-enthalpie").html("Enthalpie");
			jQuery(".cb-title-feuchtegehalt").html("Feuchtegehalt");
			jQuery(".cb-title-feuchtekugel").html("Feuchtekugel");
			jQuery(".cb-title-vol").html("Vol%");
}

jQuery(".cb-range").on("click touchstart", calc);

// Senke Temperatur um einen Schritt
jQuery("#decreasetemp").on("click", function() {
	var newVal = inputEl.val() - 1;
	inputEl.val(newVal);
	calc();
});

// Erhöhe Temperatur um einen Schritt
jQuery("#increasetemp").on("click", function() {
	var inputVal = inputEl.val();
	var inputValInt = parseInt(inputVal);
	var newVal = inputValInt + 1;
	inputEl.val(newVal);
	calc();
});

// Erhöhe Luftfeuchtigkeit um einen Schritt
jQuery("#increasehum").on("click", function() {
	var inputVal = input2El.val();
	var inputValInt = parseInt(inputVal);
	var newVal = inputValInt + 1;
	input2El.val(newVal);
	calc();
});

// Senke Luftfeuchtigkeit um einen Schritt
jQuery("#decreasehum").on("click", function() {
	var newVal = input2El.val() - 1;
	input2El.val(newVal);
	calc();
});
