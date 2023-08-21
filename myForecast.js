const currentTimeMillis = new Date().getTime();
const currentUnixTimestamp = Math.floor(currentTimeMillis / 1000);
const myForecast = new fetch(
  `https://maps.openweathermap.org/maps/2.0/radar/6/13/24?&appid=61d7d275c04dc1359e51145c381c39ce&tm=` +
    currentUnixTimestamp
)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    response.console.log(currentUnixTimestamp);
  });
myForecast();
