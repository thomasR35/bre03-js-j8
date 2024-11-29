document.addEventListener("DOMContentLoaded", () => {
  function testAge(number) {
    return new Promise((resolve, reject) => {
      if (number < 18) {
        reject("Autorisation refusée");
      } else {
        resolve("Autorisation accordée.");
      }
    });
  }

  testAge(16)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

  testAge(42)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
