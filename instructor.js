var instructor = {
  firstName: 'David',
  lastName: 'Mills'
}

console.log(instructor.firstName);
console.log(instructor['firstName']);
instructor.lastName = 'Millsy'

var key = 'firstName';
console.log(instructor[key]);

instructor[key] = 'Dave';
console.log(instructor);

