function fullName() {

  return `${this.firstName} ${this.lastname}`;
  }

// Template strings or literal (back-ticks), Template is ES6

var headInstructor = {
  firstName: 'don',
  lastName: 'Burks',
  fullName: fullName
}

var otherInstructor = {
  firstname: 'David',
  lastName: 'Mills'
  fullName: fullName
}



console.log(headInstructor.fullName());
console.log(otherInstructor.fullName());
console.log(fullName());

