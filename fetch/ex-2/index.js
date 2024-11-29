let url = "https://maridoucet.sites.3wa.io/user-api/users";

async function getUsers() {
  let response = await fetch(url);
  console.log(response);
  let data = await response.json();
  console.log(data);
}

getUsers();
