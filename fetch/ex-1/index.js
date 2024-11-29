let url = "https://maridoucet.sites.3wa.io/user-api/user/15";

async function getUsers() {
  let response = await fetch(url);
  console.log(response);
  let data = await response.json();
  console.log(data);
}

getUsers();

/*let url = "https://opentdb.com/api.php?amount=10";

async function getUsers() {
  let response = await fetch(url);
  console.log(response);
  let data = await response.json();
  console.log(data);
}

getUsers();*/
