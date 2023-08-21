const indeksSuhu = document.querySelector("#suhu");
const indeksTekanan = document.querySelector(`#tekanan`);
const myWheather = fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=surabaya&appid=61d7d275c04dc1359e51145c381c39ce&units=metric"
)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    indeksSuhu.innerHTML = `${response.main.temp}`;
    indeksTekanan.innerHTML = `${response.main.pressure}`;
    if (response.weather[0].main === "Clouds") {
      console.log("berawan ygy");
    }
  })
  .catch((error) => console.error("Error!", error.message));
myWheather();
