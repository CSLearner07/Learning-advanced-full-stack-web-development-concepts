//Approach #1 (Wrapping another async fn)

function myOwnSetTimeout(fn, duration) {
    setTimeout(fn, duration);
}

myOwnSetTimeout(function() {
    console.log("hi there");
}, 1000)

//But above code could lead to callback hell

//Promise is also a class in javascript