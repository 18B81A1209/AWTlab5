var promise = new Promise(function(resolve) {
    setTimeout(function() {
        resolve('12')
    }, 3000)
})

promise.then(function(data) {
    console.log(data + '01') 
})

promise.then(function(data) {
    console.log(data + '02')
})

promise.then(function(data) {
    console.log(data + '03')
})

console.log('Roll nums will display in 3 sec : ')