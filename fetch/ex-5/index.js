document.addEventListener("DOMContentLoaded", () => {
  let url = "https://maridoucet.sites.3wa.io/user-api/users";

  async function createTable() {
    let response = await fetch(url);
    let infoHeroes = await response.json();
    console.log(infoHeroes);

    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    let th1 = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    let th4 = document.createElement("th");
    let th5 = document.createElement("th");

    th1.textContent = "ID";
    th2.textContent = "Username";
    th3.textContent = "Prénom";
    th4.textContent = "Nom";
    th5.textContent = "Email";

    thead.appendChild(th1);
    thead.appendChild(th2);
    thead.appendChild(th3);
    thead.appendChild(th4);
    thead.appendChild(th5);
    table.appendChild(thead);

    for (let i = 0; i < infoHeroes.data.length; i++) {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      let td5 = document.createElement("td");

      td1.textContent = infoHeroes.data[i].id;
      td2.textContent = infoHeroes.data[i].username;
      td3.textContent = infoHeroes.data[i].firstName;
      td4.textContent = infoHeroes.data[i].lastName;
      td5.textContent = infoHeroes.data[i].email;
      tr.appendChild(td1);

      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.body.appendChild(table);
  }
  createTable();
});
