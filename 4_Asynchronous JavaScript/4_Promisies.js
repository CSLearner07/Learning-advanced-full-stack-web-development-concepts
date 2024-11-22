// Approach #2 (Using promises)
function myOwnSetTimeout(duration) {
  let p = new Promise(function (resolve) {
    //after 1 second, call resolve
    setTimeout(resolve, 1000);
  });
  return p;
}

myOwnSetTimeout(1000).then(function () {
  console.log("log the first thing");
});
