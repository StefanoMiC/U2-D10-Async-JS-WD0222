const getRemoteData = function (url, callback) {
  // HANDLE THE REQUEST...
  // ...
  // ...
  // ...
  // ...
  // ...
  // ...
  // ...

  // let error = null
  // let data = result of the request

  if (error) {
    callback(error);
  } else {
    callback(null, data);
  }
};

// getRemoteData("https://whatever.com/users/12839192", function(error, user){

//     if(error) {
//         // handle error
//     } else {
//         user.name
//     }
// })

getRemoteData("https://whatever.com/users/12839192", function (user) {
  getRemoteData("https://whatever.com/posts/" + user.name, function (blogPosts) {
    getRemoteData("https://whatever.com/comments/" + blogPosts[0].id, function (comments) {
      //DOM MANIPULATION
      //attaching comments in the page....

      console.log(comments);
    });
  });
});

getRemoteData("https://whatever.com/users/12839192")
  .then(user => getRemoteData("https://whatever.com/posts/" + user.name))
  .then(blogPosts => getRemoteData("https://whatever.com/comments/" + blogPosts[0].id))
  .then(comments => {
    //DOM MANIPULATION
    //attaching comments in the page....

    console.log(comments);
  })
  .catch(error => console.error(error));

// getRemoteData("https://whatever.com/users/12839192")
//   .then(function (user) {
//     return getRemoteData("https://whatever.com/posts/" + user.name);
//   })
//   .then(function (blogPosts) {
//     return getRemoteData("https://whatever.com/comments/" + blogPosts[0].id);
//   })
//   .then(function (comments) {
//     //DOM MANIPULATION
//     //attaching comments in the page....

//     console.log(comments);
//   });
// ARROW FUNCTION

// function test() {
//   console.log("test");
// }

const test = function () {
  console.log("test");
};

const test2 = () => {
  console.log("test");
};

const greet = function (name) {
  return "Hello " + name;
};

const greet2 = name => "Hello " + name;
console.log(greet2("Stefano"));
