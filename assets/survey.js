const form = document.getElementById("identitas");

const btn = document.getElementById("save");
btn.addEventListener("click", prosesData);

const dataList = document.getElementById("list-identitas");

function prosesData(event) {
  event.preventDefault();
  const tr = document.createElement("tr");
  const tdName = document.createElement("td");
  const tdAge = document.createElement("td");
  const tdGender = document.createElement("td");
  const tdSmokers = document.createElement("td");
  const tdType = document.createElement("td");

  // name
  const name = document.getElementById("name");
  const valueNama = name.value;

  // alert
  if (valueNama == "") {
    window.alert("Enter your personal data first");
    return;
  } else tdName.textContent = valueNama;

  tr.appendChild(tdName);
  dataList.appendChild(tr);

  // age
  const age = document.getElementById("umur");
  const valueAge = age.value;

  // alert
  if (valueAge == "") {
    window.alert("Enter your personal data first");
    return;
  } else tdAge.textContent = valueAge;

  tr.appendChild(tdAge);
  dataList.appendChild(tr);

  // gender
  const selectGenderMale = document.getElementById("laki-laki").checked;
  if (selectGenderMale == true) {
    const valueGenderMale = document.getElementById("laki-laki");
    const genderMale = valueGenderMale.value;
    tdGender.textContent = genderMale;
  }

  const selectGenderFemale = document.getElementById("perempuan").checked;
  if (selectGenderFemale == true) {
    const valueGenderFemale = document.getElementById("perempuan");
    const genderFemale = valueGenderFemale.value;
    tdGender.textContent = genderFemale;
  }

  tr.appendChild(tdGender);
  dataList.appendChild(tr);

  // alert
  if (tdGender == "") {
    window.alert("Enter your personal data first");
    return;
  }

  // Smokers
  const selectSmokersYes = document.getElementById("Yes").checked;
  if (selectSmokersYes == true) {
    const valueSmokersYes = document.getElementById("Yes");
    const SmokersYes = valueSmokersYes.value;
    tdSmokers.textContent = SmokersYes;
  }
  const selectSmokersNo = document.getElementById("No").checked;
  if (selectSmokersNo == true) {
    const valueSmokersNo = document.getElementById("No");
    const smokersNo = valueSmokersNo.value;
    tdSmokers.textContent = smokersNo;
  }

  tr.appendChild(tdSmokers);
  dataList.appendChild(tr);

  //type
  const listCigaret = document.getElementsByName("typeRokok");
  let cigar = "";
  for (let i = 0; i < listCigaret.length; i++) {
    if (listCigaret[i].checked) {
      cigar = cigar + listCigaret[i].value + "; ";
    }
  }

  cigar.textContent += tdType.textContent = cigar;

  tr.appendChild(tdType);
  dataList.appendChild(tr);

  // reset
  form.reset();
}
