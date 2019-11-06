$(document).ready(function () {
$('#target').submit(function () {
  event.preventDefault();
  const city = $('#inp').val();
  const whitespace = /\s/g;
   if (whitespace.test(city)){
     city.replace(whitespace, '%20');
  }

  let weatherAPI= `http://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=46384e3049b3e509e390ec3b01ec00c4`;

  const cityOptions = {
//    "id": 4781756,
    "name": city
  //  "country": "US",
  //  "coord": {
    //  "lon": -77.460258,
    //  "lat": 37.553761
  };



  function displayWeather(data) {
    $('#submitfahr, #submitcels').click(function () {
      if (this.id == 'submitfahr') {

      const num = Math.round((data.main.temp * (9/5))-459.67);
       $('#temperature').html(num + ' &#186; Fahrenheit');
}
   else if (this.id == 'submitcels') {
   const cels = Math.round(data.main.temp - 273.15);
    $('#temperature').html(cels + ' &#186; Celsius');
    // + ' Fahrenheit');
  }
})
};

$.getJSON(weatherAPI, cityOptions, displayWeather )


})
});
