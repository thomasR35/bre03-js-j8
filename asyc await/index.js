document.addEventListener("DOMContentLoaded", () => {
  function checkAge(number) {
    return new Promise((resolve, reject) => {
      if (number < 18) {
        reject("Autorisation refusée");
      } else {
        resolve("Autorisation accordée.");
      }
    });
  }

  async function testAge() {
    let response42 = await checkAge(42);
    console.log(response42);
    let response28 = await checkAge(28);
    console.log(response28);
    let response37 = await checkAge(37);
    console.log(response37);
    let response16 = await checkAge(16);
    console.log(response16);
  }
  testAge();
});
