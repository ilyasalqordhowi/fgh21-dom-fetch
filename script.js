const form = document.getElementById("form-login");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;

  const formData = new URLSearchParams();
  formData.append("email", email);
  formData.append("password", password);

  fetch("https://st2lww-8888.csb.app/auth/login", {
    method: "POST",
    body: formData,
  }).then((response) => {
    response.json().then((data) => {
      if (data.success === true) {
        window.alert(data.message);
      } else {
        window.alert(data.message);
      }
    });
  });
});
