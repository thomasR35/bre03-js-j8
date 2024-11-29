let url = "https://maridoucet.sites.3wa.io/user-api/create-user";

async function createUser() {
  let formData = new FormData();
  formData.append("username", "Sronnok");
  formData.append("firstName", "Thomas");
  formData.append("lastName", "Riou");
  formData.append("email", "thomas.riou@3wa.io");

  let options = {
    method: "POST",
    body: formData,
  };
  let response = await fetch(url, options);
  console.log(response);
  let data = await response.json();
  console.log(data);
}

createUser();
