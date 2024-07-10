const form = document.getElementById("identitas");

const table = document.getElementById("list-identitas");
console.log();

restAPI();
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const Age = event.target.umur.value;
  const Gender = event.target.kelamin.value;
  const smokers = event.target.perokok.value;
  console.log(name);
  console.log(Age);
  console.log(Gender);
  console.log(smokers);
  const cigarette = document.querySelectorAll('input[type="checkbox"]:checked');

  let cigarettes = "";
  for (let i = 0; i < cigarette.length; i++) {
    cigarettes += cigarette[i].value;
    if (i < cigarette.length - 1) {
      cigarettes += ", ";
    }
  }
  console.log(cigarettes);
  const formData = new URLSearchParams();
  formData.append("name", name);
  formData.append("age", Age);
  formData.append("gender", Gender);
  formData.append("isSmoker", smokers);
  formData.append("cigarVariant", cigarettes);

  fetch("https://st2lww-8888.csb.app/ilyas/data", {
    method: "POST",
    body: formData,
  }).then((response) => {
    response.json().then((data) => {
      if (data.succes === true) {
        window.alert(data.message);
      } else {
        window.alert(data.message);
      }
    });
  });
});

const endPoint = "https://st2lww-8888.csb.app/ilyas/data";
async function restAPI() {
  const tr = document.createElement("tr");
  const tdAll = document.createElement("td");
  const api = await fetch(endPoint);
  const data = await api.json();
  for (let i = 0; i < data.length; i++) {
    const result = "name : " + data[i].name;
  }

  tr.appendChild(tdAll);
  table.appendChild(result);
}
