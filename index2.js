const promise = new Promise(function (resolve, reject) {
  // ASYNC CODE...

  if (true) {
    resolve("Everything went fine");
  } else {
    reject("Huston we have a problem!");
  }
});

// promise
//   .then(function (succefulMessage) {
//     console.log(succefulMessage);
//   })
//   .catch(function (rejectionMessage) {
//     console.log(rejectionMessage);
//   });

const timer = ms =>
  new Promise((resolve, reject) => {
    // reject();
    setTimeout(() => resolve(), ms);
  });

timer(1000)
  .then(() => {
    console.log("Resolved after 1s");
    return timer(3000);
  })
  .then(() => console.log("Resolved after 4s"))
  .then(() => timer(1000))
  .then(() => console.log("Resolved after 5s"))
  .catch(() => console.log("error happened"));

console.log("immediately");
