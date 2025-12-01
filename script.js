let Submit = document.getElementById("sub");
Submit.addEventListener("click", checkInput);

let Username = document.getElementById("username");
let Password = document.getElementById("pwd");

function checkInput() {
  let uname = Username.value;
  let pwd = Password.value;

  if (uname === "FrostH" && pwd.toLowerCase() === "aequor") {
    window.location.href = "./emails";
  }
}
