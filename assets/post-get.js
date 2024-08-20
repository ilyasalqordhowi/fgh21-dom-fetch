const endPoint = "https://st2lww-8888.csb.app/ilyas/data";
const form = document.getElementById("identitas");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  const age = event.target.umur.value;
  const gender = event.target.kelamin.value;
  const smokers = event.target.perokok.value;
  // console.log(name);
  // console.log(Age);
  // console.log(Gender);
  // console.log(smokers);
  const cigarette = document.querySelectorAll('input[type="checkbox"]:checked');

  let cigarettes = "";
  for (let i = 0; i < cigarette.length; i++) {
    cigarettes += cigarette[i].value;
    if (i < cigarette.length - 1) {
      cigarettes += ", ";
    }
  }
  console.log(cigarettes);
  if (name === "" || age <= 0 || gender === "" || smokers === "") {
    window.alert("MASUKIN DULU BRO!!");
  } else {
    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("isSmoker", smokers);
    formData.append("cigarVariant", cigarettes);
    fetch(endPoint, {
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
  }
});

const table = document.getElementById("list-identitas");
const loadingElement = document.getElementById("loding");
async function getApi() {
  // loadingElement.classList.remove("hide");
  const response = await fetch(endPoint);
  const data = await response.json();
  table.innerHTML = "";
  data.results.forEach((item) => {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    const tdAge = document.createElement("td");
    const tdGender = document.createElement("td");
    const tdSmokers = document.createElement("td");
    const tdType = document.createElement("td");
    tdName.textContent = item.name + "Nazhif";
    tdAge.textContent = item.age;
    tdGender.textContent = item.gender;
    if (item.isSmoker) {
      tdSmokers.textContent = document.getElementById("Yes").value;
    } else {
      tdSmokers.textContent = document.getElementById("No").value;
    }
    tdType.textContent = item.cigarVariant.join("; ");
    console.log(tdType);
    tr.appendChild(tdName);
    tr.appendChild(tdAge);
    tr.appendChild(tdGender);
    tr.appendChild(tdSmokers);
    tr.appendChild(tdType);
    table.appendChild(tr);
  });
}
getApi();
