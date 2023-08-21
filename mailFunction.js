const scriptURL = `https://script.google.com/macros/s/AKfycbx02kWQM9f6vBBrqsS7hc8vNg3GNpWXcKZrcnEK4Qumvq5oKM_hVnLheVr0mywQPffsUw/exec`;
const form = document.forms["submit-to-google-sheet"];

const emailUser = document.querySelector("#emailclient");
const noHPUser = document.querySelector("#nohp");
const namaUser = document.querySelector("#nama");
const pesanUser = document.querySelector("#message");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      emailUser.value = "";
      noHPUser.value = "";
      namaUser.value = "";
      pesanUser.value = "";
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
