document.addEventListener("DOMContentLoaded", () => {
  let url = "https://maridoucet.sites.3wa.io/user-api/user/18";

  async function getUserInfo() {
    let response = await fetch(url);
    let info = await response.json();
    console.log(info);

    let username = document.createElement("h1");
    username.textContent = info.data.username;

    let firstName = document.createElement("h2");
    firstName.textContent = info.data.username;

    let lastName = document.createElement("h2");
    lastName.textContent = info.data.username;

    let email = document.createElement("h3");
    email.textContent = info.data.email;

    document.body.appendChild(username);
    document.body.appendChild(firstName);
    document.body.appendChild(lastName);
    document.body.appendChild(email);
  }

  getUserInfo();
});
