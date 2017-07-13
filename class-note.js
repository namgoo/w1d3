function replace(ref) {
  ref = {};
}

function update(ref) {
  // ref.key = 'newvalue';
  return {
    key: 'newvalue'
  }
}


var a = { key: 'value'};
replace(a); // still has original value, does not affect the value
console.log('after replace:', a)
update(a); // the contents of 'a' are changed
console.log('after update:', a)

















// var number = 1
// typeof 1
// 'number'
// typeof "asdf"
// 'string'
// typeof true
// 'boolean'
// typeof NaN
// 'number'
// typeof function() {}
// 'object'
// typeof null
// 'null'
// typeof undefined
// 'undefined'
// "asdf".length
// 4
// new String("asdf").length
// 4
// typeof new String("asdf")
// 'object'

// array = [a, b, c]
// var a = {"1"  : 'a', '2': 'b', '3': 'c'}
// a['1']
// {"key" : "value"}
// {id: 123, name: 'David', role: 'instructor', employer: 'Lighthouse Labs'}

// var b = {id: 123, name: 'David', role: 'instructor', employer: 'Lighthouse Labs'}

// b

// delete b.id

// b.id = 123
// b['id']

// b.profile = {avator : "google.com"}
// b.profile.avatar = "google.com"
