// Make array of existing alphabets in the string

  // Iterate over the string

    // Create key = letters, values = # the letter shows up

    // if key exists, increment the value by 1
var one = "awesome"
var two = "eclipse"

function roughList(word) {
  var roughList = []
  for (var i = 0; i < word.length; i++) {
    roughList.push(word[i])
  }
  return roughList
}

console.log(roughList(two))

  var list = roughList(two)
  var result = {}
  for (var j = 0; j < list.length; j++) {
    var char = list[j]
    if (result[char]) {                                       // Boolean -> Truthy
      result[char] += 1
    }
    else {
      result[char] = 1
    }
  }
console.log(result)

function countLetters(word) {
  var list = roughList(word)
  var result = {}
  for (var j = 0; j < list.length; j++) {
    var char = list[j]
    if (result[char]) {                                       // Boolean -> Truthy
      result[char] += 1
    }
    else {
      result[char] = 1
    }
  }
  return result
}

console.log(countLetters(two))

// console.log("one - awesome: ")
// console.log( editedList(roughList(one)))
// console.log("two - eclipse: ")
// console.log( editedList(roughList(two)))





// 3. counting the number of times an alphabet has come up

// 4. Function to add










// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }