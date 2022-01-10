<form action="index.php" method="POST">
  <div class="range">
        <div class="sliderValue">
          <span id="span">12.5 °C</span>
        </div>
        <div class="field">
          <h4 class="h4-text"> Temperatur </h4>
          <div class="value left" id="decreasetemp">-</div>
          <input id="input" type="range" min="1" max="100" value="25" steps="1" name="range-value" class="cb-range">
          <div class="value right" id="increasetemp">+</div>
        </div>
      </div>

  <div class="range cb-range2">

        <div class="sliderValue2">
          <span id="span2">25.0 %</span>
        </div>
        <div class="field">
          <h4 class="h4-text"> Luftfeuchtigkeit </h4>
          <div class="value left" id="decreasehum">-</div>
          <input type="range" min="1" max="100" value="25" steps="1" id="input2" name="range-value2" class="cb-range">
          <div class="value right" id="increasehum">+</div>
        </div>
      </div>
</form>

<div class="cb-result">
	<div class="cb-result-column">
		<strong><span class="cb-result-taupunkt"></span></strong><br>
		<div class="cb-result-name">
			<span class="cb-title-taupunkt"></span><br>
		</div>
			<strong><span class="cb-result-feuchtegehalt"></span></strong><br>
		<div class="cb-result-name">
			<span class="cb-title-feuchtegehalt"></span><br>
		</div>
	</div>

	<div class="cb-result-column cb-result-right">
			<strong><span class="cb-result-enthalpie"></span></strong><br>
		<div class="cb-result-name">
			<span class="cb-title-enthalpie"></span><br>
		</div>
			<strong><span class="cb-result-feuchtekugel"></span></strong><br>
		<div class="cb-result-name">
			<span class="cb-title-feuchtekugel"></span><br>
		</div>
			<strong><span class="cb-result-vol"></span></strong><br>
		<div class="cb-result-name">
			<span class="cb-title-vol"></span><br>
		</div>
	</div>
</div>
