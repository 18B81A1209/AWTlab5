var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Hello World');
    }, 2000);
})

promise.then(function(data) {
    console.log(data);
})
console.log('After 2 sec output is :')
  